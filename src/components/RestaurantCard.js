import { RES_IMG_URL } from '../utils/constants'

const RestaurantCard = (props) => {

    const { resData: { info } } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = info;
    // console.log(name, cloudinaryImageId, costForTwo, cuisines, avgRating)


    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <div className="res-logo">
                <img alt="res-logo" src={ RES_IMG_URL + cloudinaryImageId} />
            </div>
            <h3 className="p10">{ name }</h3>
            <h4 className="p10">{ cuisines.join(', ') }</h4>
            <h4 className="p10">Rating { avgRating }</h4>
            <h4 className="p10">{ costForTwo }</h4>
        </div>
    )
}

export default RestaurantCard;