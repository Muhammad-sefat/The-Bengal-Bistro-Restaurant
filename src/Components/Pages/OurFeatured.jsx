import menu from "../../assets/home/featured.jpg";
import SharedPage from "./SharedPage";

const OurFeatured = () => {
  return (
    <div
      className="bg-center h-[90vh] bg-fixed my-16 text-white p-5"
      style={{
        backgroundImage: `url(${menu})`,
      }}
    >
      <SharedPage
        subHeading={"--- Check it out ---"}
        heading={"FROM OUR MENU"}
      ></SharedPage>
      <div className="flex justify-center items-center gap-8 px-20 mx-auto">
        <img className="w-[40%]" src={menu} alt="" />
        <div className="text-left">
          <h1>March 15 , 2024</h1>
          <p>WHERE CAN I GET SOME?</p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            impedit maiores quae, officia voluptate voluptates ad distinctio
            dolore asperiores porro.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam impedit maiores quae.
          </p>
          <button className="border-b-2 font-semibold">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OurFeatured;
