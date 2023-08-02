import Card from "./Card";
import restList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [{ restList }];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="top-rated-restaurants">
        <button
          className="top-rated-btn"
          onClick={() => {
            listOfRestaurants = restList.filter(
              (rest) => rest.data.avgRating >= 4.4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="rest-card-container">
        {restList.map((restaurant) => (
          <Card key={restaurant.data.id} data={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
