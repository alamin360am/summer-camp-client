import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="w-72 h-screen bg-green-600 p-10 dashboard-nav flex flex-col">
      <NavLink
        to="dashboard"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
      >
        Dashboard Home
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
        Selected Classes
      </NavLink>
      <NavLink
        to="payment"
        className="text-white text-lg px-3 py-2 mb-2 rounded hover:bg-green-950"
      >
        Payment
      </NavLink>
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
