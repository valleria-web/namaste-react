import { CDN_URL } from "../utils/constants";

// {}
const Card = (props) => {
  const { restData } = props;

  return (
    <div className="card">
      <img
        className="card-img"
        src={CDN_URL + restData.info.cloudinaryImageId}
      />
      <h3>{restData.info.name}</h3>
      <h4>{restData.info.avgRating} starts </h4>
      <h4>{restData.info.cuisines.join(", ")}</h4>
      <h4>{restData.info.costForTwo}</h4>
      <h4>{restData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Card;