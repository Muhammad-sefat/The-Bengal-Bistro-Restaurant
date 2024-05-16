import Carousels from "./Carousel";
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
    </div>
  );
};

export default Home;
