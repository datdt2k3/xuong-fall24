import {
  FaRegCalendarAlt,
  FaArrowRight,
  FaUserAstronaut,
  FaShippingFast,
} from "react-icons/fa";
import { LiaTrophySolid } from "react-icons/lia";

const HomePage = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/id/1/1440/600"
        alt=""
        className="w-full"
      />
      <section>
        <div className="max-w-6xl mx-auto mt-16 my-6">
          <div className="flex justify-between my-6">
            <div>
              <h2 className="font-bold text-2xl">New Products</h2>
            </div>
            <div className="border-2 border-orange-200 text-center py-2 px-5 font-bold text-orange-200">
              <p>View all products</p>
            </div>
          </div>
          {/* top */}
          <div className="grid grid-cols-4 gap-7">
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/301" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <h4 className="font-bold">Syltherine</h4>
                <p className="text-slate-600">Stylish cafe chair</p>
                <p className="text-1xl font-somibold text-red-600 py-2">
                  2.500.000đ
                </p>
                <button className="border-2 border-orange-200 text-center py-2 w-full text-orange-200">
                  Add to cart
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/301" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <h4 className="font-bold">Syltherine</h4>
                <p className="text-slate-600">Stylish cafe chair</p>
                <p className="text-1xl font-somibold text-red-600 py-2">
                  2.500.000đ
                </p>
                <button className="border-2 border-orange-200 text-center py-2 w-full text-orange-200">
                  Add to cart
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/301" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <h4 className="font-bold">Syltherine</h4>
                <p className="text-slate-600">Stylish cafe chair</p>
                <p className="text-1xl font-somibold text-red-600 py-2">
                  2.500.000đ
                </p>
                <button className="border-2 border-orange-200 text-center py-2 w-full text-orange-200">
                  Add to cart
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/301" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <h4 className="font-bold">Syltherine</h4>
                <p className="text-slate-600">Stylish cafe chair</p>
                <p className="text-1xl font-somibold text-red-600 py-2">
                  2.500.000đ
                </p>
                <button className="border-2 border-orange-200 text-center py-2 w-full text-orange-200">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {/* prodcut-1 */}
        </div>
      </section>
      {/* end New Products */}

      <section>
        <div className="max-w-6xl mx-auto mt-16 my-6">
          <div className="flex justify-between my-6">
            <div>
              <h2 className="font-bold text-2xl">Gallery</h2>
            </div>
            <div className="border-2 border-orange-200 text-center py-2 px-5 font-bold text-orange-200">
              <p>View all gallery</p>
            </div>
          </div>
          {/* top */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/405/296" alt="" />
            </div>
          </div>
          {/* prodcut-1 */}
        </div>
      </section>
      {/* end Gallery */}

      <section>
        <div className="max-w-6xl mx-auto mt-16 my-6">
          <div className="flex justify-between my-6">
            <div>
              <h2 className="font-bold text-2xl">News</h2>
            </div>
            <div className="border-2 border-orange-200 text-center py-2 px-5 font-bold text-orange-200">
              <p>View all news</p>
            </div>
          </div>
          {/* top */}
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/211" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <div className="flex items-start">
                  <FaRegCalendarAlt className="mt-1 mr-2" />
                  <p className="text-slate-600 ">24/4/2024</p>
                </div>
                <h4 className="font-bold">
                  A bedroom must have something like this
                </h4>
                <div className="text-red-600 flex ">
                  <p className="flex flex-row text-1xl font-somibold  py-2">
                    Xem chi tiết
                  </p>
                  <FaArrowRight className="mt-3 ml-2" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/211" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <div className="flex items-start">
                  <FaRegCalendarAlt className="mt-1 mr-2" />
                  <p className="text-slate-600 ">24/4/2024</p>
                </div>
                <h4 className="font-bold">
                  A bedroom must have something like this
                </h4>
                <div className="text-red-600 flex ">
                  <p className="flex flex-row text-1xl font-somibold  py-2">
                    Xem chi tiết
                  </p>
                  <FaArrowRight className="mt-3 ml-2" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/211" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <div className="flex items-start">
                  <FaRegCalendarAlt className="mt-1 mr-2" />
                  <p className="text-slate-600 ">24/4/2024</p>
                </div>
                <h4 className="font-bold">
                  A bedroom must have something like this
                </h4>
                <div className="text-red-600 flex ">
                  <p className="flex flex-row text-1xl font-somibold  py-2">
                    Xem chi tiết
                  </p>
                  <FaArrowRight className="mt-3 ml-2" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/id/1/296/211" alt="" />
              </div>
              <div className="p-4 bg-neutral-100">
                <div className="flex items-start">
                  <FaRegCalendarAlt className="mt-1 mr-2" />
                  <p className="text-slate-600 ">24/4/2024</p>
                </div>
                <h4 className="font-bold">
                  A bedroom must have something like this
                </h4>
                <div className="text-red-600 flex ">
                  <p className="flex flex-row text-1xl font-somibold  py-2">
                    Xem chi tiết
                  </p>
                  <FaArrowRight className="mt-3 ml-2" />
                </div>
              </div>
            </div>
          </div>
          {/* prodcut-1 */}
        </div>
      </section>
      {/* end news */}

      <section className=" bg-orange-50">
        <div className="max-w-6xl mx-auto mt-16 ">
          <div className="grid grid-cols-4 gap-8 py-16 ">
            <div className="flex ">
              <LiaTrophySolid className="w-10 h-11" />
              <div className="pl-5">
                <h2 className="text-xl font-semibold">High Quality</h2>
                <p className="text-slate-600 ">Crafted from top materials</p>
              </div>
            </div>

            <div className="flex ">
              <FaUserAstronaut className="w-10 h-11" />
              <div className="pl-5">
                <h2 className="text-xl font-semibold">24 / 7 Support</h2>
                <p className="text-slate-600 ">Dedicated support</p>
              </div>
            </div>

            <div className="flex ">
              <LiaTrophySolid className="w-10 h-11" />
              <div className="pl-5">
                <h2 className="text-xl font-semibold">Warranty Protection</h2>
                <p className="text-slate-600 ">Over 2 years</p>
              </div>
            </div>

            <div className="flex ">
              <FaShippingFast className="w-10 h-11" />
              <div className="pl-5">
                <h2 className="text-xl font-semibold">Free Shipping</h2>
                <p className="text-slate-600 ">Order over 150 $</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
