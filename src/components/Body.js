import Card from "./Card";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState(restList)


  //let listOfRestaurants = [{ restList }];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (rest) => rest.data.avgRating >= 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="rest-card-container">
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.data.id} data={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
