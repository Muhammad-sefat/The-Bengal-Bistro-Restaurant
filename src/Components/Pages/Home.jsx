import Carousels from "./Carousel";
import ChefRecommend from "./ChefRecommend";
import MenuSection from "./MenuSection";
import OurFeatured from "./OurFeatured";
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
      <OurFeatured></OurFeatured>
    </div>
  );
};

export default Home;
