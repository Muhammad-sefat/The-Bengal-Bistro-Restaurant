import SharedPage from "./SharedPage";
import salad from "../../assets/home/slide1.jpg";
import soup from "../../assets/home/slide3.jpg";
import dessert from "../../assets/home/slide4.jpg";

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
      <div className="flex flex-col justify-between md:flex-row gap-5">
        <div className="card  bg-base-100 shadow-xl border">
          <figure>
            <img src={salad} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="font-semibold border-b-2  border-orange-400 w-[40%] mx-auto text-orange-400 bg-slate-300 p-2 rounded hover:bg-slate-700">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl border">
          <figure>
            <img src={soup} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">Caeser Soup</h2>
            <p className="my-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="font-semibold border-b-2 border-orange-400 w-[40%] mx-auto text-orange-400 bg-slate-300 p-2 rounded hover:bg-slate-700">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl border">
          <figure>
            <img src={dessert} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
              Sweet Desserts
            </h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="font-semibold border-b-2  border-orange-400 w-[40%] mx-auto text-orange-400 bg-slate-300 p-2 rounded hover:bg-slate-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
