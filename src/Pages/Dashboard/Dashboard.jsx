import useTitle from "../../Hook/useTitle";


const Dashboard = () => {
    useTitle("Dashboard")
    return (
        <section className="p-10 flex justify-center items-center w-[80%]">
            <h2 className="text-5xl">Dashboard Home</h2>
        </section>
    );
};

export default Dashboard;