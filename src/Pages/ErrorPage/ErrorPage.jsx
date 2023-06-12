import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className="relative h-screen flex items-center justify-center">
            <iframe className="w-full h-full" src="https://embed.lottiefiles.com/animation/94527">
            </iframe>
            <Link to='/' className="btn btn-primary bg-cyan-500 border-none hover:bg-cyan-600 absolute bottom-36">go to home</Link>
        </div>
    );
};

export default ErrorPage;