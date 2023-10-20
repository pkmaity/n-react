
const CatCard = ({cat}) => {
    console.log('Data', cat);
    return (
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={ `https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg` } alt="" style={{
            width: '10rem'
          }} />
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{ cat?.name }</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">{ cat?.description }</p>
          </div>
        </div>
      </li>
    )

}

export default CatCard