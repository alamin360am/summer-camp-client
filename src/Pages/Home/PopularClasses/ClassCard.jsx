
import { Link } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
  const { photoUrl, title, numberOfStudents, availableSeats } = singleClass;
  return (
      <div className="flex flex-col items-center p-4 bg-white rounded-lg">
        <figure className="w-96 h-full mb-4">
          <img src={photoUrl} alt="" className="w-full rounded-lg" />
        </figure>
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
        <div className="flex gap-8 mb-4">
          <p>Students: {numberOfStudents}</p>
          <p>Available Seats: {availableSeats}</p>
        </div>
        <Link
          to="/classes"
          className="btn btn-outline text-green-700 hover:bg-green-700 hover:outline-none hover:text-white"
        >
          Select Class
        </Link>
      </div>
  );
};

export default ClassCard;
