import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hook/useCart";

const ClassCard = ({ singleClass }) => {
  const { photoUrl, title, numberOfStudents, instructorName, availableSeats, price, _id } = singleClass;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddCart = item => {
    console.log(item);
    if(user && user.email) {
      const selectClass = {classId: _id, title, photoUrl, price, email: user.email}
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(selectClass)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId) {
          refetch(); // refetch for header cart number change dynamically
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Class has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        } 
      })
    } else {
      Swal.fire({
        title: 'Please Log in first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log In'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  }

  return (
    <div className={`flex flex-col items-center p-4 ${availableSeats == 0 ? 'bg-red-400' : 'bg-white'} rounded-lg`}>
      <figure className="w-96 h-full mb-4">
        <img src={photoUrl} alt="" className="w-full rounded-lg" />
      </figure>
      <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
      <h4 className="text-xl mb-3">Instructor: <span className="font-semibold text-black">{instructorName}</span></h4>
      <div className="flex flex-col md:flex-row md:gap-8 mb-3">
        <p>Students: {numberOfStudents}</p>
        <p>Available Seats: {availableSeats}</p>
      </div>
      <p className="text-2xl mb-4">Price: <span className="text-green-600 font-bold">${price}</span></p>
      {
        <button onClick={()=> handleAddCart(singleClass)} disabled={availableSeats == 0 ? true : false} className="btn btn-outline text-green-700 hover:bg-green-700 hover:outline-none hover:text-white">
        Select Class
      </button>
      }
    </div>
  );
};

export default ClassCard;
