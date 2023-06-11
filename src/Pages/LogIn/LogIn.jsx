import { useState } from "react";
import { FaUserCircle, FaEye, FaEyeSlash, FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [show, setShow] = useState(true);

  return (
    <form className="py-32 px-4 flex flex-col justify-center items-center bg-green-200 text-black">
      <FaUserCircle className="icon"></FaUserCircle>
      <h2 className="text-3xl font-bold mb-4">Log In</h2>
      <div className="relative w-full md:w-1/3">
        <input
          type="email"
          placeholder="Input your Email"
          className="p-3 pl-11 w-full rounded-md mb-4 bg-gray-100 focus:bg-white focus:outline-none text-black"
        />
        <FaEnvelope className="absolute top-3 text-2xl text-green-600 left-2"></FaEnvelope>
      </div>
      <div className="relative w-full md:w-1/3">
        <input
          type={show ? "password" : "text"}
          placeholder="Input Password"
          className="p-3 pl-11 w-full rounded-md mb-4 bg-gray-100 focus:bg-white focus:outline-none text-black"
        />
        <FaKey className="absolute top-3 text-2xl text-green-600 left-2"></FaKey>
        <div
          onClick={() => setShow(!show)}
          className="btn btn-xs absolute top-3 right-2"
        >
          {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
        </div>
      </div>
      <input type="submit" value="Log In" className="mb-4 btn btn-outline w-full md:w-1/3 text-black hover:bg-green-600 hover:text-white" />
      <p>Don`t have any account? <Link to='/signup' className="text-green-600 font-bold">Sign up Now</Link> </p>
    </form>
  );
};

export default LogIn;
