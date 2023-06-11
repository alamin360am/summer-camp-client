import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../../../assets/banner/01.jpg'
import img2 from './../../../assets/banner/02.jpg'
import img3 from './../../../assets/banner/03.jpg'
import img4 from './../../../assets/banner/04.jpg'

const Banner = () => {
  return (
    <Carousel autoPlay={true}>
      <div className="relative">
        <img src={img1} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black backdrop:blur-sm bg-opacity-60 p-4 text-white">
            <h2 className="text-3xl mb-4">Learn Badminton</h2>
            <p className="mb-4">Learn Badminton in this summer. Be a pro player in Badminton</p>
            <button className="btn btn-primary bg-green-800 border-none hover:bg-green-950">Enroll Now</button>
        </div>
      </div>
      <div>
        <img src={img2} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black backdrop:blur-sm bg-opacity-60 p-4 text-white">
            <h2 className="text-3xl mb-4">Learn Cricket</h2>
            <p className="mb-4">Learn Cricket in this summer. Be a pro player in Cricket</p>
            <button className="btn btn-primary bg-green-800 border-none hover:bg-green-950">Enroll Now</button>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black backdrop:blur-sm bg-opacity-60 p-4 text-white">
            <h2 className="text-3xl mb-4">Learn Football</h2>
            <p className="mb-4">Learn Football in this summer. Be a pro player in Football</p>
            <button className="btn btn-primary bg-green-800 border-none hover:bg-green-950">Enroll Now</button>
        </div>
      </div>
      <div>
        <img src={img4} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black backdrop:blur-sm bg-opacity-60 p-4 text-white">
            <h2 className="text-3xl mb-4">Learn Voliball</h2>
            <p className="mb-4">Learn Voliball in this summer. Be a pro player in Voliball</p>
            <button className="btn btn-primary bg-green-800 border-none hover:bg-green-950">Enroll Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
