import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const { user, setUser, creatUser, updateUser } = useAuth();
  const [showBtn, setShowBtn] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;
    try {
      const result = await creatUser(email, password);
      await updateUser(name, photo);
      setUser({ ...user?.email, displayName: name, photoURL: photo });
      console.log(result);

      const userInfo = {
        name,
        email,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data?.insertedId) {
          toast("Register Successful");
          reset();
          navigate("/");
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <section className="p-6 dark:text-gray-800 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  dark:bg-gray-50 bg-yellow-600"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Signup Now!
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1 text-left">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1 text-left">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 ml-1 text-left">
              Photo URL
            </label>
            <input
              id="photo"
              type="photo"
              placeholder="Photo URL"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 ml-1 text-left">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showBtn ? "text" : "password"}
                placeholder="Password"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                {...register("password", { required: true })}
              />
              <span
                className="absolute bottom-3 right-3 text-xl"
                onClick={() => setShowBtn(!showBtn)}
              >
                {showBtn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Signup
            </button>
          </div>
          <p className="text-lg text-center sm:px-6 dark:text-gray-600">
            Don't have an account ?
            <Link
              to={"/signin"}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              {" "}
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;
