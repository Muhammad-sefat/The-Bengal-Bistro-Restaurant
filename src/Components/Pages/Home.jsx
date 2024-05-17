import Carousels from "./Carousel";
import ChefRecommend from "./ChefRecommend";
import MenuSection from "./MenuSection";
import SingleSection from "./SingleSection";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Carousels></Carousels>
      <Slider></Slider>
      <SingleSection></SingleSection>
      <MenuSection></MenuSection>
      <ChefRecommend></ChefRecommend>
    </div>
  );
};

export default Home;
