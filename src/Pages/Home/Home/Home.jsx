
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;