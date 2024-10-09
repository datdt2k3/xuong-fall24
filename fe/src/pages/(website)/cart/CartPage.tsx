import { MdDelete } from "react-icons/md";

const CartPage = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto mt-16 my-6 mb-20">
        <div className="flex flex-row">
          <div className="basis-3/4 mr-4">
            <table className="w-full">
              <thead className="">
                <tr className="bg-slate-100 text-start">
                  <th className="py-6 ">Product</th>
                  <th className="py-6 "></th>
                  <th className="py-6 ">Price</th>
                  <th className="py-6 ">Quantity</th>
                  <th className="py-6 ">Subtotal</th>
                  <th className="py-6 "></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>
                    <img src="https://picsum.photos/id/1/77/77" alt="" />
                  </td>
                  <td>Asgaard sofa</td>
                  <td>25.000.000đ</td>
                  <td>1</td>
                  <td>25.000.000đ</td>
                  <td>
                    <a href="#" className="text-red-600">
                      <MdDelete className="w-[21px] h-[22.88px]" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* end table products */}
          <div className="basis-1/4 bg-slate-100 p-5">
            <h2 className="text-xl font-semibold">Cart Total</h2>
            <hr className="my-3 font-semibold" />
            <div>
              <div className="flex justify-between mb-4">
                <p className="font-medium">Subtotal</p>
                <p className="text-gray-400 font-light">25.000.000đ</p>
              </div>

              <div className="flex justify-between mb-4">
                <p className="font-medium">Total</p>
                <p className="font-bold text-red-600 ">25.000.000đ</p>
              </div>
            </div>

            <div className="text-center border border-orange-400 py-2 mt-8">
              <a href="#" className="text-orange-400 font-semibold">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
