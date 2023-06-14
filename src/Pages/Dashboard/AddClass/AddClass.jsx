import { useForm } from "react-hook-form";
import Heading from "../../../Component/Heading/Heading";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const {user} = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const {title, photoUrl, instructorName, instructorEmail, availableSeats, price} = data;
    const seats = parseInt(availableSeats);
    const taka = parseInt(price);
    const saveData = { title: title, photoUrl: photoUrl, instructorName: instructorName, instructorEmail: instructorEmail, availableSeats: seats, price: taka, numberOfStudents: 0}
    fetch('https://summer-camp-server-alamin360am.vercel.app/added_classes', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveData)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.insertedId) {
            reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class created successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  };

  return (
    <section className="p-10">
      <Heading title={"Add Class"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-green-200 text-black p-10">
        <h2 className="text-3xl font-bold mb-4">Add a Class</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-6">

            <div>
                <input type="text" {...register("title", { required: true })} name="title" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Class Name"/>
                {errors.title && <p className="text-red-500">Class Name is required</p>}
            </div>

            <input defaultValue={user?.displayName} type="text" {...register("instructorName", { required: true })} name="instructorName" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>

            <input defaultValue={user?.email} type="text" {...register("instructorEmail", { required: true })} name="instructorEmail" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>

            <div>
                <input type="number" {...register("availableSeats", { required: true })} name="availableSeats" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Available seats"/>
                {errors.availableSeats && <p className="text-red-500">Available seats is required</p>}
            </div>

            <div>
                <input type="number" {...register("price", { required: true })} name="price" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Price"/>
                {errors.price && <p className="text-red-500">Price is required</p>}
            </div>

            <div>
                <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Photo URL"/>
                {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
            </div>

        </div>
        <input type="submit" value="Add Class" className="btn btn-outline w-full text-black hover:bg-green-600 hover:text-white" />
      </form>
    </section>
  );
};

export default AddClass;
