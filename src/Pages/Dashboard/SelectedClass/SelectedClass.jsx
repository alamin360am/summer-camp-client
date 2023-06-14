import Swal from "sweetalert2";
import Heading from "../../../Component/Heading/Heading";
import useCart from "../../../Hook/useCart";

const SelectedClass = () => {
  const [cart, refetch] = useCart();
  const handleDelete = item =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://summer-camp-server-alamin360am.vercel.app/carts/${item._id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your Class has been deleted.',
                    'success'
                  )
              }
          })
        }
      })
  }
  return (
    <section className="p-10">
      <Heading title={"My Selected Classes"}></Heading>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((singleCart, index) => (
              <tr key={singleCart._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleCart.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{singleCart.title}</p>
                </td>
                <td>
                    <p>{singleCart.price}</p>
                </td>
                <th>
                  <button className="btn btn-primary btn-xs outline-none border-none">Pay Now</button>
                </th>
                <th>
                  <button onClick={()=> handleDelete(singleCart)} className="btn btn-warning text-white bg-red-500 btn-xs outline-none border-none">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {
            cart.length == 0 && <p className="text-xl text-center mt-4">No class selected</p>
        }
      </div>
    </section>
  );
};

export default SelectedClass;
