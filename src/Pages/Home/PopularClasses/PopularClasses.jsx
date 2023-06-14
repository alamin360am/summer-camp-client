import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";
import ClassCard from "./ClassCard";
import { Slide } from "react-awesome-reveal";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.slice(0, 6);
        setClasses(popular);
      });
  }, []);

  return (
      <section className="my-10">
        <Heading title="Popular Classes"></Heading>
        <Slide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {classes.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
          ))}
        </div>
        </Slide>
      </section>
  );
};

export default PopularClasses;
