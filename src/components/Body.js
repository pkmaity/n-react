import { useEffect } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    restaurantList.map(restaurantData => <RestaurantCard key={restaurantData.info.id} resData={restaurantData} />)
                }
            </div>
        </div>
    )
}

export default Body;