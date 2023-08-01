import React from "react";

const Card = (props) => {
  const { data } = props;

  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
        alt="Card Logo"
      />
      <h3>{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.costForTwoString}</h4>
      <h4>{data.deliveryTime} minutes </h4>
    </div>
  );
};

export default Card;
