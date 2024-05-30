import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import useMenu from "../Hooks/useMenu";
import SharedPage from "../Pages/SharedPage";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <div>
      <SharedPage
        heading={"Manage All Items"}
        subHeading={"--- Hurry Up ---"}
      ></SharedPage>

      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="p-3 bg-yellow-500 rounded">
            <tr>
              <th>#</th>
              <th> IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                  <button className="bg-yellow-500 p-3 text-white rounded">
                    <FaEdit />
                  </button>
                </th>
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

export default ManageItems;
