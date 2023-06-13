import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hook/useCart";

const Header = () => {
  const [cart] = useCart();
  
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={`text-lg hover:text-green-600 bg-transparent ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={`text-lg hover:text-green-600 bg-transparent ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={`text-lg hover:text-green-600 bg-transparent ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/dashboard"
          className={`text-lg hover:text-green-600 bg-transparent ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/selected-classes" className="btn btn-primary bg-gray-200 border-none dashboard-btn mx-2 flex content-center">
          <FaShoppingCart className="text-green-700 text-base"></FaShoppingCart>
          <div className="text-green-700">+{cart?.length || 0}</div>
        </Link>
      </li>
    </>
  );

  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <header>
      <nav className="px-6 py-2 fixed z-50 backdrop:blur-sm bg-opacity-70 max-w-screen-xl bg-black text-white left-1/2 translate-x-[-50%] w-full">
        <div className="flex justify-between items-center">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/" className="text-lg font-bold">
              Summer <span className="font-light hidden lg:block">Camp</span>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">
              {navOptions}
            </ul>

            {user ? (
              <div
                className="w-10 h-10 rounded-full overflow-hidden mr-4"
                title={user?.displayName}
              >
                <img src={user?.photoURL} alt="User Photo" />
              </div>
            ) : (
              ""
            )}

            {user ? (
              <Link
                onClick={handleLogOut}
                className="btn btn-outline text-white hover:bg-green-700 hover:outline-none hover:text-white"
              >
                Log Out
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline text-white hover:bg-green-700 hover:outline-none hover:text-white"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
