import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle, FaEye, FaEyeSlash, FaEnvelope, FaKey, FaInfo, FaPhotoVideo, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState('')
  const { register, handleSubmit, watch, getValues, formState: { errors }, } = useForm();
  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      setError('')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration successful',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => setError(error.message))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-32 px-4 flex flex-col justify-center items-center bg-green-200 text-black" >
      <FaUserCircle className="icon"></FaUserCircle>
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      <div className="relative w-full md:w-1/3 mb-4">
        <input type="Text" {...register("name", { required: true })} name="name" placeholder="Input your Name" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.name && <p className="text-red-500">Name is required</p>}
        <FaInfo className="absolute top-3 text-2xl text-green-600 left-2"></FaInfo>
      </div>
      <div className="relative w-full md:w-1/3 mb-4">
        <input type="email" {...register("email", { required: true })} name="email" placeholder="Input your Email" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <FaEnvelope className="absolute top-3 text-2xl text-green-600 left-2"></FaEnvelope>
      </div>
      <div className="relative w-full md:w-1/3 mb-4">
        <input type={show ? "password" : "text"} {...register("password", {required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} name="password" placeholder="Input Password" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be minimum 6 characters</p>}
        {errors.password?.type === 'pattern' && <p className="text-red-500">Must include one capital letter and one special character</p>}
        <FaKey className="absolute top-3 text-2xl text-green-600 left-2"></FaKey>
        <div onClick={() => setShow(!show)} className="btn btn-xs absolute top-3 right-2" >
        {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
        </div>
      </div>
      <div className="relative w-full md:w-1/3 mb-4">
        <input {...register("password_repeat", { required: true })} type="password" placeholder="Confirm Password" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {watch("password_repeat") !== watch("password") && getValues("password_repeat")  ? (<p className="text-red-500">password not match</p>) : null}
        <FaKey className="absolute top-3 text-2xl text-green-600 left-2"></FaKey>
      </div>
      <div className="relative w-full md:w-1/3 mb-4">
        <input {...register("photoURL", { required: true })} type="Text" placeholder="Photo URL" className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black" />
        {errors.photoURL && <p className="text-red-500">Photo URL is required</p>}
        <FaPhotoVideo className="absolute top-3 text-2xl text-green-600 left-2"></FaPhotoVideo>
      </div>
      <p className="text-red-500">{error}</p>
      <input type="submit" value="Register Now" disabled={watch("password_repeat") !== watch("password") ? true : false} className="mb-4 btn btn-outline w-full md:w-1/3 text-black hover:bg-green-600 hover:text-white" />
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 font-bold">
          Log in Now
        </Link>{" "}
      </p>
    </form>
  );
};

export default SignUp;
