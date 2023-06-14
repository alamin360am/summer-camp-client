import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";
import InstructorCart from "./InstructorCart";
import { Zoom } from "react-awesome-reveal";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.slice(0, 6);
        setInstructors(popular);
      });
  }, []);
  return (
    <section className="py-10">
      <Heading title={"Popular Instructor"}></Heading>
      <Zoom>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <InstructorCart
            key={instructor._id}
            instructor={instructor}
          ></InstructorCart>
        ))}
      </div>
      </Zoom>
    </section>
  );
};

export default PopularInstructor;
