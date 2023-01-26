import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
const RestrauntMenu = () => {
    const params = useParams();
    const {id } = params;
    const [restaurantItem,setRestaurantItem] = useState(null);

    useEffect(()=>{
     getRestaurantData()
    },[])

    async function getRestaurantData()  {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/v4/full?lat=26.8466937&lng=80.94616599999999&menuId="+id);
        const json = await data.json();
        console.log(json.data)
        setRestaurantItem(json.data);  
    }

    return (!restaurantItem)?<Shimmer/>:(
    <div style ={{display:'flex',justifyContent:'space-around'}}>
    <div>
    <h1> Restraunt {restaurantItem?.name}</h1>
    <img className = "image-each-restaurant"src={IMG_CDN_URL+restaurantItem?.cloudinaryImageId}/>
    <h3>{restaurantItem?.area}{","}{restaurantItem?.city}</h3>
    <h3>{restaurantItem?.avgRating} stars</h3>
    <h3>{restaurantItem?.costForTwoMsg}</h3>
    </div>
    { console.log(Object.values(restaurantItem.menu?.items))}
    <div>
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurantItem?.menu?.items).map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
    
    </div>
    </div>
  )
}

export default RestrauntMenu;