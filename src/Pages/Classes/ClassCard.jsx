const ClassCard = ({ singleClass }) => {
  const { photoUrl, title, numberOfStudents, instructorName, availableSeats, price } = singleClass;
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
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
      <button className="btn btn-outline text-green-700 hover:bg-green-700 hover:outline-none hover:text-white">
        Select Class
      </button>
    </div>
  );
};

export default ClassCard;
