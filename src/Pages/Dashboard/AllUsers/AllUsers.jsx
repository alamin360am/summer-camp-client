import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const respond = await fetch("http://localhost:5000/users");
    return respond.json();
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Make admin successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (id) => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Make instructor successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl mb-4">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role ? user.role : "Student"}</td>
                <td>
                  {user.role === "admin" && "Admin"}
                  {user.role === "instructor" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-warning text-white bg-green-500 btn-xs outline-none border-none"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role !== "admin" && user.role !== "instructor" && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-warning text-white bg-green-500 btn-xs outline-none border-none"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user._id)}
                        className="btn btn-warning text-white bg-green-500 btn-xs outline-none border-none"
                      >
                        Make Instructor
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-warning text-white bg-red-500 btn-xs outline-none border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
