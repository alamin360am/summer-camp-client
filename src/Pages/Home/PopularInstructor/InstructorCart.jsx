const InstructorCart = ({ instructor }) => {
  const { name, photoUrl, email } = instructor;

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
      <figure className="w-40 h-40 rounded-full overflow-hidden mb-4 flex justify-center items-center">
        <img src={photoUrl} alt="" className="w-full h-full rounded-lg" />
      </figure>
      <h3 className="text-2xl font-semibold text-black mb-2">{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default InstructorCart;
