import OurMenu from "./OurMenu";
import banner from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";

import FoodCard from "./FoodCard";
import TabCategory from "./TabCategory";

const OurShop = () => {
  const [menus] = useMenu();
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const drinks = menus.filter((menu) => menu.category === "drinks");

  return (
    <div>
      <OurMenu
        image={banner}
        hedaing={"OUR SHOP"}
        title={"Would you like to try a dish?"}
      ></OurMenu>

      <Tabs>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <TabCategory items={salad}></TabCategory>
        </TabPanel>
        <TabPanel>
          <TabCategory items={pizza}></TabCategory>
        </TabPanel>
        <TabPanel>
          <TabCategory items={soup}></TabCategory>
        </TabPanel>
        <TabPanel>
          <TabCategory items={dessert}></TabCategory>
        </TabPanel>
        <TabPanel>
          <TabCategory items={drinks}></TabCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
