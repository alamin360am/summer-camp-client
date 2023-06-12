import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle, FaEye, FaEyeSlash, FaEnvelope, FaKey } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hook/useTitle";

const LogIn = () => {
  useTitle("Log In")
  const [show, setShow] = useState(true);
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
      console.log(result.user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, {replace: true})
    })
    .catch(error => setError(error.message))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-32 px-4 flex flex-col justify-center items-center bg-green-200 text-black">
      <FaUserCircle className="icon"></FaUserCircle>
      <h2 className="text-3xl font-bold mb-4">Log In</h2>
      <div className="relative w-full md:w-1/3 mb-4">
        <input type="email" {...register("email", { required: true })} name="email" placeholder="Input your Email" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <FaEnvelope className="absolute top-3 text-2xl text-green-600 left-2"></FaEnvelope>
      </div>
      <div className="relative w-full md:w-1/3 mb-4">
        <input type={show ? "password" : "text"} {...register("password", {required: true})} name="password" placeholder="Input Password" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.password && <p className="text-red-500">Password is required</p>}
        <FaKey className="absolute top-3 text-2xl text-green-600 left-2"></FaKey>
        <div onClick={() => setShow(!show)} className="btn btn-xs absolute top-3 right-2" >
        {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
        </div>
      </div>
      <p className="text-red-500">{error}</p>
      <input type="submit" value="Log In" className="mb-4 btn btn-outline w-full md:w-1/3 text-black hover:bg-green-600 hover:text-white" />
      <p>Don`t have any account? <Link to='/signup' className="text-green-600 font-bold">Sign up Now</Link> </p>
    </form>
  );
};

export default LogIn;
