import FoodCard from "./FoodCard";

const TabCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default TabCategory;
