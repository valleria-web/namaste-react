import Card from "./Card";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restList);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] =
    useState(restList);

  //let listOfRestaurants = [{ restList }];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="top-rated-filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = listOfRestaurants.filter(
              (rest) => rest.data.avgRating >= 4.4
            );
            setFilteredListOfRestaurant(filteredListOfRestaurant);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="rest-card-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <Card key={restaurant.data.id} data={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
