import { NavLink } from "react-router-dom";
import useCart from "../../Hook/useCart";
import useAdmin from "../../Hook/useAdmin";
import useInstructor from "../../Hook/useInstructor";
import { FaHome, FaEdit, FaHouseUser, FaStoreAlt, FaCheckSquare, FaMoneyCheck, FaUserTie, FaStar, FaDatabase, FaPlusCircle } from "react-icons/fa";

const DashboardNav = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const admin = isAdmin?.admin;
  // const admin = false;
  const [isInstructor] = useInstructor();
  const instructor = isInstructor?.instructor;
  // const instructor = true;

  return (
    <div className="w-72 h-screen bg-green-600 p-8 dashboard-nav flex flex-col">
      {admin && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaHome></FaHome>
            Admin Home
          </NavLink>
          <NavLink
            to="manage-classes"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaEdit></FaEdit>
            Manage Classes
          </NavLink>
          <NavLink
            to="users"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaHouseUser></FaHouseUser>
            All Users
          </NavLink>
        </>
      )}
      {instructor && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaHome></FaHome>
            Instructor Home
          </NavLink>
          <NavLink
            to="my-class"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaDatabase></FaDatabase>
            My Classes
          </NavLink>
          <NavLink
            to="add-class"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaPlusCircle></FaPlusCircle>
            Add Classes
          </NavLink>
        </>
      )}
      {admin == false && instructor == false && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaHome></FaHome>
            Student Home
          </NavLink>
          <NavLink
            to="enroll"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaStoreAlt></FaStoreAlt>
            Enroll Classes
          </NavLink>
          <NavLink
            to="selected-classes"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaCheckSquare></FaCheckSquare>
            Selected Classes <span>{`(${cart.length})`}</span>
          </NavLink>
          <NavLink
            to="payment"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
          >
            <FaMoneyCheck></FaMoneyCheck>
            Payment
          </NavLink>
        </>
      )}
      <div className="divider"></div>
      <NavLink
        to="/"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
      >
        <FaHome></FaHome>
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
      >
        <FaUserTie></FaUserTie>
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950 flex items-center gap-2"
      >
        <FaStar></FaStar>
        Classes
      </NavLink>
    </div>
  );
};

export default DashboardNav;
