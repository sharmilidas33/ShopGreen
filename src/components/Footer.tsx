import Image from "next/image";
import logo from "../components/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-green-100 text-black flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-gray-400 hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://sharmiliportfolio.netlify.app/"
          target="_blank"
        >
          @sharmiliportfolio.com
        </a>
      </p>
    </div>
  );
};

export default Footer;