import SharedPage from "./SharedPage";

const ChefRecommend = () => {
  return (
    <div>
      <div className="bg-black p-16 my-10">
        <p className="text-white text-2xl font-semibold">
          Call Us : +88 0192345678910
        </p>
      </div>
      <SharedPage
        subHeading={"--- Should Try --- "}
        heading={"CHEF RECOMMENDS"}
      ></SharedPage>
      <div></div>
    </div>
  );
};

export default ChefRecommend;
