/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa6";
import productImg from "/images/products/1.png";
import productImg2 from "/images/products/2.png";
import productImg3 from "/images/products/3.png";
import productImg4 from "/images/products/4.png";
import productImg5 from "/images/products/5.png";
import productImg6 from "/images/products/6.png";

const Products = () => {
  return (
    <div>
      <div className="px-36 mt-32">
        <div className="space-y-5 text-center">
          <h4 className="text-xl text-red-500 font-bold">Popular Products</h4>
          <h2 className="text-5xl font-bold">Browse Our Products</h2>
          <p className="max-w-3xl mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-12">
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Cools Led Light</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg2} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Cools Led Light</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg3} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Car Air Filter</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg4} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Car Battery</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg5} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Car Tyre</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
          <div className="p-6 space-y-5 border-2 border-gray-200 rounded-lg">
            <figure className="bg-gray-300 p-7 rounded-lg ">
              <img src={productImg6} alt="" className=" w-40 h-36 mx-auto " />
            </figure>
            <div className="space-y-5 text-center">
                <div className="text-amber-500 flex w-20 mx-auto">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <p className="text-red-500 font-semibold"> Price : $20</p>
            </div>
          </div>
        </div>
        <button className="mx-auto block text-red-500 text-lg font-semibold mt-12 border-2 border-red-500 px-5 py-4 hover:bg-red-500 hover:text-white  rounded">
          More service
        </button>
      </div>
    </div>
  );
};

export default Products;
