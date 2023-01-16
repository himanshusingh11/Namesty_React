import { restrauList } from "../constants";
import ReasturantCard from "./ReasturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const filterData = (searchTxt, restaurant) => {
  return restaurant.filter((restra) => restra.data.name.includes(searchTxt));
};

const Body = () => {
  // let searchTxt = "Chicken"
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

  // async function getUser() {
  //   try {

  //     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING',{mode:'cors'});

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return  allrestaurant.length===0?(<Shimmer/>):(
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
        {filteredrestaurant.map((restaurant) => {
          return (
            <ReasturantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
