import { useEffect, useState } from "react";
import CatCard from './CatCard';

const CatList = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        fetchCatBreeds();
    }, [])

    async function fetchCatBreeds() {
        const result = await fetch('https://api.thecatapi.com/v1/breeds')
        setCats(await result.json())
        // console.log('result', await result.json())
    } 

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {
                cats.map(c => <CatCard key={ c?.id } cat={c} />)
              }
          </ul>
        </div>
    </div>
    )
}

export default CatList