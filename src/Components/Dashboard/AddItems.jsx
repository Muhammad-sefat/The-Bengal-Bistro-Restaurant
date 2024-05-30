import { FaUtensils } from "react-icons/fa";
import SharedPage from "../Pages/SharedPage";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.file[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.details,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menus = await axiosSecure.post("/menu", menuItem);
      if (menus.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "Success",
          title: "Your Menu Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <div>
      <SharedPage
        heading={"ADD AN ITEM"}
        subHeading={"---What is New!---"}
      ></SharedPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            required=""
            className="input input-bordered w-full "
            {...register("name", { required: true })}
          />
        </label>
        <div className="flex gap-5 py-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Category Name</span>
            </div>
            <select
              id="category"
              type="text"
              name="category"
              required=""
              placeholder="Category"
              className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              {...register("category", { required: true })}
            >
              <option>Category Name</option>
              <option>salad</option>
              <option>dessert</option>
              <option>pizza</option>
              <option>drinks</option>
              <option>soup</option>
              <option>popular</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Price</span>
            </div>
            <input
              type="text"
              placeholder="Price"
              required=""
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Details"
            required=""
            {...register("details", { required: true })}
          ></textarea>
        </label>
        <input
          type="file"
          required=""
          className="file-input w-full  text-left my-3"
          {...register("file", { required: true })}
        />

        <div>
          <button className="btn btn-warning w-full">
            Add Items <FaUtensils></FaUtensils>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
