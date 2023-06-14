import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Heading from "../../../Component/Heading/Heading";
import { Link } from "react-router-dom";

// http://localhost:5000/added_classes?email=sakib@khan.com
const MyClass = () => {
    const {user} = useContext(AuthContext)
    const { data: added_classes = [] } = useQuery(["added_classes"], async () => {
        const respond = await fetch(`http://localhost:5000/added_classes?email=${user?.email}`)
        return respond.json();
      });



    return (
        <section className="p-10">
            <Heading title={"My Classes"}></Heading>
            <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Enroll</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
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
                    <p> {added_class.numberOfStudents}</p>
                </td>
                <td>
                  <p>
                    {added_class?.status ? added_class?.status : "Pending"}
                  </p>
                </td>
                <th>
                  <button className="btn btn-warning text-white bg-blue-500 btn-xs outline-none border-none" disabled={added_class?.status == "denied" ? false : true}>Feedback</button>
                </th>
                <th>
                  <Link to={`/dashboard/update/${added_class._id}`} className="btn btn-warning text-white bg-orange-500 btn-xs outline-none border-none" disabled={added_class?.status ? true : false}>Update</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
    );
};

export default MyClass;