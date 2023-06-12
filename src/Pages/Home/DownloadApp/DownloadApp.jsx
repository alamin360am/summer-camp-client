import Heading from "../../../Component/Heading/Heading";
import playStore from "./../../../assets/icon/googleplay.png";
import appStore from "./../../../assets/icon/appstore.png";

const DownloadApp = () => {
  return (
    <section className="my-10">
      <Heading title="Download Our App"></Heading>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div>
          <img src={playStore} alt="" className="w-[10rem]" />
        </div>
        <div>
          <img src={appStore} alt="" className="w-[10rem]" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
