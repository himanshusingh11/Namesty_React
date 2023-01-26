import ReasturantCard from "./ReasturantCard";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Shimmer from "./Shimmer";


const filterData = (searchTxt, restaurant) => {
  searchTxt = searchTxt.toLowerCase();
  return restaurant.filter((restra) => restra?.data?.name?.toLowerCase().includes(searchTxt));
};

const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    if (searchTxt === "") {
      setFilteredRestaurant(allrestaurant);
    }
  }, [searchTxt]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  
  return  allrestaurant?.length===0?(<Shimmer/>):(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allrestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurant.length>0? filteredrestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><ReasturantCard {...restaurant.data}  />
            </Link>
          );
        }):<><h1>No Restaurants Found</h1></>}
      </div>
    </>
  );
};

export default Body;
