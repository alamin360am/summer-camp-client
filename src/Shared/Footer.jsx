import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="grid gap-0 grid-cols-1 md:grid-cols-2 place-items-center w-full">
        <div className="bg-green-900 w-full h-full flex flex-col items-center py-12">
            <h2 className="text-5xl font-bold">Summer</h2>
            <h2 className="text-4xl">Camp</h2>
            <div className="divider"></div>
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <div className="flex flex-col items-center gap-3">
            <address>123 ABS Street, Uni 21, Bangladesh</address>
            <a href="tel:+880123456789">+880 123456789</a>
          </div>
        </div>
        <div className="bg-green-950 w-full h-full flex flex-col items-center py-12">
          <h2 className="text-3xl mb-4">Follow Us</h2>
          <p className="mb-3">Join us on social media</p>
          <div className="flex gap-4">
            <a href="#">
              <BsFacebook className="w-6 h-6"></BsFacebook>
            </a>
            <a href="#">
              <BsTwitter className="w-6 h-6"></BsTwitter>
            </a>
            <a href="#">
              <BsInstagram className="w-6 h-6"></BsInstagram>
            </a>
            <a href="#">
              <BsYoutube className="w-6 h-6"></BsYoutube>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;