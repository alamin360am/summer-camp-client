import { useForm } from "react-hook-form";
import Heading from "../../../Component/Heading/Heading";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddClass = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {user} = useContext(AuthContext);
  
  const onSubmit = data =>{
    console.log(data);
  }

  return (
    <section className="p-10">
      <Heading title={"Add Class"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-green-200 text-black p-10">
        <h2 className="text-3xl font-bold mb-4">Add a Class</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-6">

            <input type="text" name="title" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Class Name"/>

            <input type="text" name="instructorName" disabled={true} defaultValue={user?.displayName} className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>

            <input type="text" name="instructorEmail" disabled={true} defaultValue={user?.email} className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>

            <input type="number" name="availableSeats" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Available seats"/>

            <input type="number" name="price" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Price"/>

            <input type="text" name="photoUrl" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Photo URL"/>

        </div>
        <input type="submit" value="Add Class" className="btn btn-outline w-full text-black hover:bg-green-600 hover:text-white" />
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="px-4 flex flex-col justify-center items-center bg-green-200 text-black" >
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        <div className="relative w-full md:w-1/3 mb-4">
          <input
            type="Text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Input your Name"
            className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>
        <div className="relative w-full md:w-1/3 mb-4">
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="Input your Email"
            className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="relative w-full md:w-1/3 mb-4">
          <input
            type="text"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
            })}
            name="password"
            placeholder="Input Password"
            className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be minimum 6 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Must include one capital letter and one special character
            </p>
          )}
        </div>
        <div className="relative w-full md:w-1/3 mb-4">
          <input
            {...register("password_repeat", { required: true })}
            type="password"
            placeholder="Confirm Password"
            className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black"
          />
          {watch("password_repeat") !== watch("password") &&
          getValues("password_repeat") ? (
            <p className="text-red-500">password not match</p>
          ) : null}
        </div>
        <div className="relative w-full md:w-1/3 mb-4">
          <input
            {...register("photoURL", { required: true })}
            type="Text"
            placeholder="Photo URL"
            className="p-3 pl-11 w-full rounded-md bg-gray-100 focus:bg-white focus:outline-none text-black"
          />
          {errors.photoURL && (
            <p className="text-red-500">Photo URL is required</p>
          )}
        </div>
        <input
          type="submit"
          value="Register Now"
          disabled={
            watch("password_repeat") !== watch("password") ? true : false
          }
          className="mb-4 btn btn-outline w-full md:w-1/3 text-black hover:bg-green-600 hover:text-white"
        />
      </form> */}
    </section>
  );
};

export default AddClass;
