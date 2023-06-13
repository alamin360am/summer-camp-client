const Heading = ({ title }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl mb-10 heading p-2 border-l-8 border-green-500">
         {title}{" "}
      </h2>
      
    </div>
  );
};

export default Heading;
