import { restrauList } from "../constants";
import ReasturantCard from "./ReasturantCard";
import { useState,useEffect } from "react";
const filterData = (searchTxt,restaurant) => {

return restaurant.filter((restra)=>restra.data.name.includes(searchTxt))
    
}

const Body = () => {
  // let searchTxt = "Chicken"
  const [restaurant,setRestaurant] = useState(restrauList);
  const [searchTxt,setSearchTxt] = useState("");

  useEffect(()=>{
    if(searchTxt==''){
      setRestaurant(restrauList)
    }
  },[searchTxt,setRestaurant])


  
    return (
      <>
      
      <div className="search-container">
      <input
      type="text"
      className="search-input"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>setSearchTxt(e.target.value)}
      />
      <button 
      className="search-btn"
      onClick={()=>{const data = filterData(searchTxt,restaurant);
      setRestaurant(data)
      }}
      > 
      Search
      </button>



      </div>
      <div className="restaurant-list">
      
       {restaurant.map((restaurant)=>{
        return <ReasturantCard {...restaurant.data} key={restaurant.data.id}/>
        
       })}
      
      </div>
      </>
    )
  }

export default Body;