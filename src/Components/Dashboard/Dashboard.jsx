import {
  FaBars,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaVideo,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-400 mr-5">
        <div>
          <a className="btn btn-ghost text-xl font-bold uppercase p-3">
            The Bengal Bistro <span className="text-xs">Restaurant</span>
          </a>
        </div>
        <ul className="menu p-4">
          <li className="mt-4">
            <NavLink to={"/dashboard/userHome"}>
              {" "}
              <FaHome></FaHome> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar> RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>
              <FaWallet></FaWallet>PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaCartShopping></FaCartShopping>MY CART
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaPeopleGroup></FaPeopleGroup>ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaVideo></FaVideo> MY BOOKING
            </NavLink>
          </li>

          <div className="divider"></div>

          <li className="mt-4">
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              {" "}
              <FaBars></FaBars> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>
              {" "}
              <FaShoppingBag></FaShoppingBag> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              {" "}
              <FaEnvelope></FaEnvelope> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
