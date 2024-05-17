import OurMenu from "./OurMenu";
import SingleMenu from "./SingleMenu";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((item) => (
          <SingleMenu key={item._id} item={item}></SingleMenu>
        ))}
      </div>
      <div>
        <button className="text-lg font-semibold border-b-2 hover:bg-red-600 hover:text-white hover:p-2 hover:rounded">
          Show All Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
