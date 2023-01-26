import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { IMG_CDN_URL } from '../constants';

const RestrauntMenu = () => {
    const params = useParams();
    const {id } = params;

    console.log(id,"params")

    const [restaurantItem,setRestaurantItem] = useState({});

    useEffect(()=>{
     getRestaurantData()
    },[])

    async function getRestaurantData()  {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/v4/full?lat=26.8466937&lng=80.94616599999999&menuId=628865");
        const json = await data.json();
        console.log(json.data)
        setRestaurantItem(json.data);  
    }
  return (
    <div>
    <div>
    <h1> Restraunt {restaurantItem?.name}</h1>
    <img className = "image-each-restaurant"src={IMG_CDN_URL+restaurantItem.cloudinaryImageId}/>
    <h3>{restaurantItem.area}{","}{restaurantItem.city}</h3>
    <h3>{restaurantItem.avgRating} stars</h3>
    <h3>{restaurantItem.costForTwoMsg}</h3>
    </div>
    </div>
  )
}

export default RestrauntMenu;