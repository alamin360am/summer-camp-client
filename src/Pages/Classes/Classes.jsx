import { useEffect, useState } from "react";
import Heading from "../../Component/Heading/Heading";
import useTitle from "../../Hook/useTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
  useTitle("Classes");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-alamin360am.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <section className="pt-28">
      <Heading title={"All Classes"}></Heading>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-10 mb-8">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default Classes;
