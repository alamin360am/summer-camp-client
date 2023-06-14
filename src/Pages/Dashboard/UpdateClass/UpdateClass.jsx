import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Heading from "../../../Component/Heading/Heading";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const added_class = useLoaderData();
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        const {title, photoUrl, instructorName, instructorEmail, availableSeats, price} = data;
        const seats = parseInt(availableSeats);
        const taka = parseInt(price);
        const saveData = { title: title, photoUrl: photoUrl, instructorName: instructorName, instructorEmail: instructorEmail, availableSeats: seats, price: taka, numberOfStudents: 0}
        fetch(`http://localhost:5000/added_classes/${added_class._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(saveData),
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
            Swal.fire({
            title: "Toy Updated successfully",
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
            });
            navigate('/dashboard/my-class')
        });
    }

    return (
        <section className="p-10">
            <Heading title={"Update"}></Heading>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-green-200 text-black p-10">
                <h2 className="text-3xl font-bold mb-4">{`Update - ${added_class.title}`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-6">

                    <div>
                        <label className="block mb-2">Title</label>
                        <input type="text" {...register("title", { required: true })} name="title" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Class Name" defaultValue={added_class.title}/>
                        {errors.title && <p className="text-red-500">Class Name is required</p>}
                    </div>

                    <div>
                        <label className="block mb-2">Instructor Name</label>
                        <input defaultValue={user?.displayName} type="text" {...register("instructorName", { required: true })} name="instructorName" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>
                    </div>

                    <div>
                    <label className="block mb-2">Instructor Email</label>
                        <input defaultValue={user?.email} type="text" {...register("instructorEmail", { required: true })} name="instructorEmail" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black"/>
                    </div>

                    <div>
                        <label className="block mb-2">Available Seats</label>
                        <input type="number" {...register("availableSeats", { required: true })} name="availableSeats" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Available seats" defaultValue={added_class.availableSeats}/>
                        {errors.availableSeats && <p className="text-red-500">Available seats is required</p>}
                    </div>

                    <div>
                        <label className="block mb-2">Price</label>
                        <input type="number" {...register("price", { required: true })} name="price" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Price" defaultValue={added_class.price}/>
                        {errors.price && <p className="text-red-500">Price is required</p>}
                    </div>

                    <div>
                        <label className="block mb-2">Photo URL</label>
                        <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" className="p-3 rounded-md bg-gray-100 w-full md:w-[20rem] focus:bg-white focus:outline-none text-black" placeholder="Photo URL" defaultValue={added_class.photoUrl}/>
                        {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
                    </div>

                </div>
                <input type="submit" value="Update" className="btn btn-outline w-full text-black hover:bg-green-600 hover:text-white" />
            </form>
        </section>
    );
};

export default UpdateClass;