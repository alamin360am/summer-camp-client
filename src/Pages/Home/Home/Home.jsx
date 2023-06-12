
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import DownloadApp from "../DownloadApp/DownloadApp";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;