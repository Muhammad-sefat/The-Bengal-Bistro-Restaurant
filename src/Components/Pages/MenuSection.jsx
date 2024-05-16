import { useEffect, useState } from "react";
import SharedPage from "./SharedPage";
import SingleMenu from "./SingleMenu";

const MenuSection = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const datas = data.filter((menu) => menu.category === "soup");
        setMenu(datas);
      });
  }, []);
  return (
    <div>
      <SharedPage
        subHeading={"--- Check it out ---"}
        heading={"FROM OUR MENU"}
      ></SharedPage>
      <div className="grid md:grid-cols-2 gap-5">
        {menu.map((item) => (
          <SingleMenu key={item._id} item={item}></SingleMenu>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
