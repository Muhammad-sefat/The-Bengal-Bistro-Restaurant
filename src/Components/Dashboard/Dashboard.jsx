import {
  FaBars,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaVideo,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping, FaPeopleGroup, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-400 mr-5">
        <div>
          <a className="btn btn-ghost text-xl font-bold uppercase p-3">
            The Bengal Bistro <span className="text-xs">Restaurant</span>
          </a>
        </div>
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              {" "}
              <li className="mt-4">
                <NavLink to={"/dashboard/adminHome"}>
                  {" "}
                  <FaHome></FaHome> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaCalendar></FaCalendar> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaUser></FaUser> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allBookings"}>
                  <FaCartShopping></FaCartShopping>ALL BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaPeopleGroup></FaPeopleGroup>ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
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
                  <FaCartShopping></FaCartShopping>MY CART ({cart.length})
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
            </>
          )}
          <div className="divider"></div>

          <li className="mt-4">
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/our-menu"}>
              {" "}
              <FaBars></FaBars> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to={"/our-shop"}>
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
