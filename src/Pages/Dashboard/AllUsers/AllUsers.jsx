import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const token = localStorage.getItem("access-token");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const respond = await fetch("https://summer-camp-server-alamin360am.vercel.app/users", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return respond.json();
  });

  console.log(users);

  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-server-alamin360am.vercel.app/users/admin/${user._id}`, {
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

  const handleMakeInstructor = (user) => {
    const { email, name, photoURL } = user;
    const saveUser = { email: email, name: name, photoUrl: photoURL, numberOfStudents: 0 };
    fetch(`https://summer-camp-server-alamin360am.vercel.app/users/instructor/${user._id}`, {
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

    fetch("https://summer-camp-server-alamin360am.vercel.app/instructor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-alamin360am.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User deleted.", "success");
            }
          });
      }
    });
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
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-warning text-white bg-green-500 btn-xs outline-none border-none"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role !== "admin" && user.role !== "instructor" && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-warning text-white bg-green-500 btn-xs outline-none border-none"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
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
