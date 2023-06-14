// import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Heading from "../../../Component/Heading/Heading";
import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {
    const { data: added_classes = [], refetch } = useQuery(["added_classes"], async () => {
        const respond = await fetch("http://localhost:5000/added_classes")
        return respond.json();
      });

    const handleApprove = classes => {
      fetch(`http://localhost:5000/added_classes/approved/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class approved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      
      fetch('http://localhost:5000/classes', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(classes)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })


    }

    const handleDenied = classes => {
      fetch(`http://localhost:5000/added_classes/denied/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class denied successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }

    return (
        <section className="p-10">
            <Heading title={"Manage Classes"}></Heading>
            <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Delete</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {added_classes.map((added_class, index) => (
              <tr key={added_class._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={added_class.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{added_class.title}</p>
                </td>
                <td>
                    <p><span>Name:</span> {added_class.instructorName}</p>
                    <p><span>Email:</span> {added_class.instructorEmail}</p>
                </td>
                <td>
                    <p><span>Seats:</span> {added_class.availableSeats}</p>
                    <p><span>Price:</span> {added_class.price}</p>
                </td>
                <td>
                  <p>
                    {added_class?.status ? added_class?.status : "Pending"}
                  </p>
                </td>
                <th>
                  <button onClick={()=>handleApprove(added_class)} className="btn btn-primary bg-green-600 btn-xs outline-none border-none" disabled={added_class?.status ? true : false}>Approve</button>
                </th>
                <th>
                  <button onClick={()=> handleDenied(added_class)} className="btn btn-warning text-white bg-red-500 btn-xs outline-none border-none" disabled={added_class?.status ? true : false}>Denied</button>
                </th>
                <th>
                  <button className="btn btn-warning text-white bg-blue-500 btn-xs outline-none border-none" disabled={added_class?.status == "denied" ? false : true}>Feedback</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
    );
};

export default ManageClasses;