import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import OurMenu from "./OurMenu";
import SharedPage from "./SharedPage";

import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import { Helmet } from "react-helmet-async";
const Menu = () => {
  const [menus] = useMenu();
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const offered = menus.filter((menu) => menu.category === "offered");

  return (
    <div>
      <Helmet>
        <title>The Bengal Bistro restaurant || Home</title>
      </Helmet>
      <OurMenu
        image={menuImg}
        hedaing={"our menu"}
        title={"Would you like try the dish"}
      ></OurMenu>
      <SharedPage
        subHeading={"--- Don't miss ---"}
        heading={"TODAY'S OFFER"}
      ></SharedPage>
      <MenuCategory items={offered}></MenuCategory>
      <OurMenu
        image={saladImg}
        hedaing={"salad"}
        title={"Would you like try the dish"}
      ></OurMenu>
      <MenuCategory items={salad}></MenuCategory>

      <OurMenu
        image={soupImg}
        hedaing={"Soups"}
        title={"Would you like try the dish"}
      ></OurMenu>
      <MenuCategory items={soup}></MenuCategory>

      <OurMenu
        image={dessertImg}
        hedaing={"Desserts"}
        title={"Would you like try the dish"}
      ></OurMenu>
      <MenuCategory items={dessert}></MenuCategory>

      <OurMenu
        image={pizzaImg}
        hedaing={"Pizzas"}
        title={"Would you like try the dish"}
      ></OurMenu>
      <MenuCategory items={pizza}></MenuCategory>
    </div>
  );
};

export default Menu;
