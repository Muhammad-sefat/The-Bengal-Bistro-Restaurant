import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import SharedPage from "../Pages/SharedPage";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const axiosSecure = useAxiosSecure();
  const totalCart = cart.reduce(
    (total, currPrice) => total + currPrice.price,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SharedPage
        subHeading={"--- My Cart ---"}
        heading={"WANNA ADD MORE?"}
      ></SharedPage>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Items : {cart.length}</h2>
        <h2 className="text-3xl font-semibold">Total Price : {totalCart}</h2>
        <button className="btn btn-secondary">Pay</button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="p-3 bg-yellow-500 rounded">
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 p-3 text-white rounded"
                  >
                    <FaRegTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
