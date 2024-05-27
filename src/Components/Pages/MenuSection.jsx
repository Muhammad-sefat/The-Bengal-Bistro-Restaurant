import useMenu from "../Hooks/useMenu";
import SharedPage from "./SharedPage";
import SingleMenu from "./SingleMenu";

const MenuSection = () => {
  const [menu] = useMenu();
  const datas = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <SharedPage
        subHeading={"--- Check it out ---"}
        heading={"FROM OUR MENU"}
      ></SharedPage>
      <div className="grid md:grid-cols-2 gap-5">
        {datas.map((item) => (
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

export default MenuSection;
