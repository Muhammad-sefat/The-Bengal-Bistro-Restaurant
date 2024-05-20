import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section className="p-6 dark:text-gray-800 ">
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  dark:bg-gray-50 bg-yellow-600"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            SignUp Now!
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
            />
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
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 ml-1 text-left">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Send
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
