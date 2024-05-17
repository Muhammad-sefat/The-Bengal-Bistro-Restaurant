const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl border">
        <figure>
          <img src={image} alt="salad" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <button className="font-semibold border-b-2  border-orange-400 w-[40%] mx-auto text-orange-400 bg-slate-300 p-2 rounded hover:bg-slate-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
