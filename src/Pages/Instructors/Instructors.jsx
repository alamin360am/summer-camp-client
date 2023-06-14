import { useEffect, useState } from "react";
import Heading from "../../Component/Heading/Heading";
import useTitle from "../../Hook/useTitle";
import InstructorCart from "./InstructorCart";

const Instructors = () => {
  useTitle("Our Instructors");
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-alamin360am.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <section className="pt-28">
      <Heading title={"Our Instructor"}></Heading>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-10 mb-8">
        {
            instructors.map(instructor => <InstructorCart key={instructor._id} instructor={instructor}></InstructorCart>)
        }
      </div>
    </section>
  );
};

export default Instructors;
