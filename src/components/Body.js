import Card from "./Card";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restList);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] =
    useState(restList);

  //let listOfRestaurants = [{ restList }];
  useEffect(() => {
    console.log("use Effect Called");
  }, []);

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
