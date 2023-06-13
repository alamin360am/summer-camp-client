import { Outlet } from "react-router-dom";
import DashboardNav from "../Pages/Dashboard/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;