
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import DownloadApp from "../DownloadApp/DownloadApp";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;