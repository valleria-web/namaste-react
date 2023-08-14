import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// {} []

const Body = () => {
  //Local State Variable - Super powerful variable
  // Whenever state variable update, react triggers a reconciliation cycle, it re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
            onClick={() => {
              //Filter the restaurant cards and update UI
              // searchText
              console.log(searchText)
              const search = filteredRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(search);
            }}
          >
            Search
          </button>
        </div>
    
        <button
          //Filter Top Restaurant is working =)
          className="filter-btn"
          onClick={() => {
            console.log("btn clicked");
            const filtered = filteredRestaurant.filter(
              (res) => res.info.avgRating >= 4.4
            );

            setListOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-card-container">
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;