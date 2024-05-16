const SingleMenu = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex justify-between items-center gap-5 my-3">
      <img className="w-24 rounded-xl" src={image} alt="" />
      <div className="text-left">
        <p className="text-xl font-semibold">{name}</p>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-500 font-semibold"> ${price}</p>
    </div>
  );
};

export default SingleMenu;
