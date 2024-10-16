import { RxTwitterLogo } from "react-icons/rx";
import { PiFacebookLogo } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { PiLinkedinLogo } from "react-icons/pi";
const Footer = () => {
  return (
    <footer className="  bg-gray-800 text-white p-4 mt-4 fixed w-full bottom-0">
      <div className="flex justify-center  items-center space-x-24 mb-4 text-lg">
        <a href="#" className="hover:underline pr-8">
          About
        </a>
        <a href="#" className="hover:underline pl-8 ">
          Contact
        </a>
        <a href="#" className="hover:underline pl-12">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Accessibility
        </a>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-4 ">
        <a href="#" className="hover:text-blue-600 text-lg">
          <RxTwitterLogo />
        </a>
        <a href="#" className="hover:text-blue-700 text-lg">
          <PiFacebookLogo />
        </a>
        <a href="#" className="hover:text-pink-500 text-lg">
          <RxInstagramLogo />
        </a>
        <a href="#" className="hover:text-blue-700 text-lg">
          <PiLinkedinLogo />
        </a>
      </div>

      <div className="text-sm flex justify-center items-center ">
        &copy; 2024 Hospital Management System. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
