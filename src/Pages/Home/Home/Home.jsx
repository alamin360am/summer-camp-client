
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import DownloadApp from "../DownloadApp/DownloadApp";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;