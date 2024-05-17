import Carousels from "./Carousel";
import ChefRecommend from "./ChefRecommend";
import MenuSection from "./MenuSection";
import OurFeatured from "./OurFeatured";
import SingleSection from "./SingleSection";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Carousels></Carousels>
      <Slider></Slider>
      <SingleSection></SingleSection>
      <MenuSection></MenuSection>
      <ChefRecommend></ChefRecommend>
      <OurFeatured></OurFeatured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
