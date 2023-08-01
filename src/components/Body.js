import Card from "./Cards";
import { useState } from "react";
import restList from "../utils/mockData";

const Body = () => {

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-card-container">
      {restList.map((restaurant) => (
          <Card key={restaurant.data.id} data={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
