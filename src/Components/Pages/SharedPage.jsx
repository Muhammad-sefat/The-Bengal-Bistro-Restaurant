const SharedPage = ({ subHeading, heading }) => {
  return (
    <div className="w-[30%] mx-auto my-8">
      <h1 className="text-orange-500 border-b-4 my-5 pb-3">{subHeading}</h1>
      <p className="uppercase border-b-4 text-4xl pb-3">{heading}</p>
    </div>
  );
};

export default SharedPage;
