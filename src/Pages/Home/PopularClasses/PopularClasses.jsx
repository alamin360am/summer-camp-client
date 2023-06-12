import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";
import ClassCard from "./ClassCard";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <section className="my-10">
            <Heading title='Popular Classes'></Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    classes.map(singleClass=> <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;