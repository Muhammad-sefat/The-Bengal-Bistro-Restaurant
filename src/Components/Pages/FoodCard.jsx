import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, recipe, _id, price } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post(`/carts`, cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "Cart Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged!",
        text: "Please Login to add a Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl border ">
        <div className="relative">
          <figure>
            <img src={image} alt="salad" />
          </figure>
          <p className="absolute p-2 rounded text-xl font-semibold text-orange-600 bg-black top-0">
            {price}
          </p>
        </div>
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <button
            onClick={() => handleAddToCart(item)}
            className="font-semibold border-b-2  border-orange-400 w-[40%] mx-auto text-orange-400 bg-slate-300 p-2 rounded hover:bg-slate-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
