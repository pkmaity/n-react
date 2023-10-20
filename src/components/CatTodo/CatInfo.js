import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CatInfo = () => {
    
    const [catInfo, setCatInfo] = useState({})
    const { catId } = useParams();
  
    useEffect(() => {
        fetchCatBreed();
    }, [])

    async function fetchCatBreed() {
        const result = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
        const [catDetails] = await result.json()
        setCatInfo(catDetails)
        // console.log('result', await result.json())
    } 
  console.log('catDetails', catInfo)
    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={catInfo?.url} />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
            </div>
        </div>
    )
}

export default CatInfo