import Heading from "../../../Component/Heading/Heading";
import useCart from "../../../Hook/useCart";

const SelectedClass = () => {
  const [cart] = useCart();
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
                  <button className="btn btn-warning text-white bg-red-500 btn-xs outline-none border-none">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SelectedClass;
