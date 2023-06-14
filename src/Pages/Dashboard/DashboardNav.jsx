import { NavLink } from "react-router-dom";
import useCart from "../../Hook/useCart";
import useAdmin from "../../Hook/useAdmin";
import useInstructor from "../../Hook/useInstructor";

const DashboardNav = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const admin = isAdmin?.admin;
  // const admin = true;
  const [isInstructor] = useInstructor();
  const instructor = isInstructor?.instructor;
  // const instructor = false;

  return (
    <div className="w-72 h-screen bg-green-600 p-10 dashboard-nav flex flex-col">
      {admin && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Admin Home
          </NavLink>
          <NavLink
            to="manage-classes"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Manage Classes
          </NavLink>
          <NavLink
            to="users"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            All Users
          </NavLink>
        </>
      )}
      {instructor && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Instructor Home
          </NavLink>
          <NavLink
            to="add-class"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Add Classes
          </NavLink>
        </>
      )}
      {admin == false && instructor == false && (
        <>
          <NavLink
            to="dashboard"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Student Home
          </NavLink>
          <NavLink
            to="enroll"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Enroll Classes
          </NavLink>
          <NavLink
            to="selected-classes"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Selected Classes <span>{`(${cart.length})`}</span>
          </NavLink>
          <NavLink
            to="payment"
            className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
          >
            Payment
          </NavLink>
        </>
      )}
      <div className="divider"></div>
      <NavLink
        to="/"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
      >
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
      >
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
      >
        Classes
      </NavLink>
    </div>
  );
};

export default DashboardNav;
