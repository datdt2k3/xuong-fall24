import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContacts } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaTiktok,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/id/1/1440/600"
        alt=""
        className="w-full"
      />
      <section className="max-w-6xl mx-auto mt-16 my-6">
        <div className="py-7">
          <div className="grid grid-cols-3 gap-7 justify-center">
            <div className="flex ">
              <div className="border border-yellow-300 w-16 h-16 flex items-center justify-center ">
                <CiLocationOn className="text-yellow-300 w-[26.67px] h-[33.33px]" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold my-3">ADDRESS</h2>
                <div>
                  <p className="text-gray-400">
                    60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border border-yellow-300 w-16 h-16 flex items-center justify-center ">
                <MdOutlineContacts className="text-yellow-300 w-[26.67px] h-[33.33px]" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold my-3">CONTACT DETAIL</h2>
                <div>
                  <p className="text-gray-400">info@furniro.com</p>
                  <p className="text-gray-400 font-bold">02056278686</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border border-yellow-300 w-16 h-16 flex items-center justify-center ">
                <IoShareSocial className="text-yellow-300 w-[26.67px] h-[33.33px]" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold my-3">SOCIAL NETWORKS</h2>
                <div className="grid grid-cols-5 gap-3">
                  <div>
                    <FaFacebookSquare className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <FaInstagram className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <FaTiktok className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <FaTwitterSquare className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <FaYoutubeSquare className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex w-full">
          <div className="w-full">
            <img
              src="https://picsum.photos/id/1/704/485"
              alt=""
              className="w-full"
            />
          </div>
          <div className="bg-gray-300 w-full flex flex-col justify-center p-10">
            <div className="">
              <h2 className="text-xl font-bold mb-6">Contact</h2>
              <h2 className="text-3xl font-bold mb-6">Connect with us now</h2>
              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border-collapse border-gray-400 bg-gray-300 border-b-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border-collapse border-gray-400 bg-gray-300 border-b-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border-collapse border-gray-400 bg-gray-300 border-b-2 "
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-2 border-collapse border-gray-400 bg-gray-300 border-b-2 "
                />
                <textarea
                  placeholder="Message"
                  className="p-2 border-collapse border-gray-400 bg-gray-300 border-b-2 col-span-2"
                ></textarea>
              </form>
              <button className="bg-yellow-500 text-white py-2 px-4 my-6">
                Send Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
