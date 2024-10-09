import { Link } from "react-router-dom";
import {
  IoCartOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineDashboard, AiOutlineMessage } from "react-icons/ai";

const Sliderbar = () => {
  return (
    <div>
      <div className="grid justify-items-center mt-4 ">
        <a href="#" className="mb-10">
          <span className="text-cyan-500 font-semibold text-2xl">AdminHub</span>
        </a>
        <ul className="">
          <li className="my-5 hover:text-sky-500">
            <a href="dashbroad" className="flex items-center space-x-2">
              <AiOutlineDashboard />
              <span className="text font-medium">Dashboard</span>
            </a>
          </li>
          <li className="my-5 hover:text-sky-500">
            <a href="#" className="flex items-center space-x-2">
              <CiShop />
              <span className="font-medium">My Shop</span>
            </a>
          </li>
          <li className="my-5 hover:text-sky-500">
            <a href="#" className="flex items-center space-x-2">
              <TbBrandGoogleAnalytics />
              <span className="font-medium">Analytics</span>
            </a>
          </li>
          <li className="my-5 hover:text-sky-500">
            <a href="#" className="flex items-center space-x-2">
              <AiOutlineMessage />
              <span className="font-medium">Message</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li className="my-5 hover:text-sky-500">
            <a href="#" className="flex items-center space-x-2">
              <IoSettingsOutline />
              <span className="font-medium">Settings</span>
            </a>
          </li>
          <li className="my-5 hover:text-sky-500">
            <a href="#" className="flex items-center space-x-2">
              <IoLogOutOutline />
              <span className="font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sliderbar;
