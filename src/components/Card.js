import React from "react";
import { CDN_URL } from "../utils/constants"   

const Card = (props) => {
    const { data } = props;

  return (
    <div className="card">
      <img className="card-img" src= {CDN_URL + data.cloudinaryImageId}  alt="Card Logo" />
      <h3>{data.name}</h3>
      <h4>{data.avgRating} stars</h4>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.costForTwoString}</h4>
      <h4>{data.deliveryTime} minutes </h4>
    </div>
  );
};

export default Card;
