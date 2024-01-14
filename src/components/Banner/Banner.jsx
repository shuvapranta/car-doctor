import bannerImg from "/images/homeCarousel/1.jpg";
import bannerImg2 from "/images/homeCarousel/2.jpg";
import bannerImg3 from "/images/homeCarousel/3.jpg";
import bannerImg4 from "/images/homeCarousel/4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-36">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-screen">
          <img src={bannerImg} className="w-full rounded-lg" />
          <div className="absolute flex  z-10 justify-between transform -translate-y-1/2  right-5 bottom-5 gap-5">
            <a href="#slide4" className="btn btn-circle  bg-opacity-20 text-white hover:bg-red-500 ">
            <FaArrowLeft className="z-10" />
            
            </a>
            <a href="#slide2" className="btn btn-circle bg-opacity-20 text-white hover:bg-red-500">
            <FaArrowRight />
            </a>
          </div>
          <div className="absolute  p-24 text-white z-10 space-y-7">
            <h1 className="text-6xl  font-bold  w-[480px]">Affordable Price For Car Servicing</h1>
            <p className="w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="bg-red-500 px-7 py-4 rounded">Discover More</button>
                <button className="px-7 py-3 rounded border-2 border-white ml-5 hover:bg-red-500 transition">Latest Project</button>
            </div>
          </div>
          <div className="absolute bg-black left-0 top-0 right-0 bottom-0 rounded-lg opacity-30 z-0  ">

          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-screen">
          <img src={bannerImg2} className="w-full rounded-lg" />
          <div className="absolute flex  z-10 justify-between transform -translate-y-1/2  right-5 bottom-5 gap-5">
            <a href="#slide1" className="btn btn-circle  bg-opacity-20 text-white hover:bg-red-500 ">
            <FaArrowLeft className="z-10" />
            
            </a>
            <a href="#slide3" className="btn btn-circle bg-opacity-20 text-white hover:bg-red-500">
            <FaArrowRight />
            </a>
          </div>
          <div className="absolute  p-24 text-white z-10 space-y-7">
            <h1 className="text-6xl  font-bold  w-[480px]">Affordable Price For Car Servicing</h1>
            <p className="w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="bg-red-500 px-7 py-4 rounded">Discover More</button>
                <button className="px-7 py-3 rounded border-2 border-white ml-5 hover:bg-red-500 transition">Latest Project</button>
            </div>
          </div>
          <div className="absolute bg-black left-0 top-0 right-0 bottom-0 rounded-lg opacity-30 z-0  ">

          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-screen">
          <img src={bannerImg3} className="w-full rounded-lg" />
          <div className="absolute flex  z-10 justify-between transform -translate-y-1/2  right-5 bottom-5 gap-5">
            <a href="#slide2" className="btn btn-circle  bg-opacity-20 text-white hover:bg-red-500 ">
            <FaArrowLeft className="z-10" />
            
            </a>
            <a href="#slide4" className="btn btn-circle bg-opacity-20 text-white hover:bg-red-500">
            <FaArrowRight />
            </a>
          </div>
          <div className="absolute  p-24 text-white z-10 space-y-7">
            <h1 className="text-6xl  font-bold  w-[480px]">Affordable Price For Car Servicing</h1>
            <p className="w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="bg-red-500 px-7 py-4 rounded">Discover More</button>
                <button className="px-7 py-3 rounded border-2 border-white ml-5 hover:bg-red-500 transition">Latest Project</button>
            </div>
          </div>
          <div className="absolute bg-black left-0 top-0 right-0 bottom-0 rounded-lg opacity-30 z-0  ">

          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-screen">
          <img src={bannerImg4} className="w-full rounded-lg" />
          <div className="absolute flex  z-10 justify-between transform -translate-y-1/2  right-5 bottom-5 gap-5">
            <a href="#slide3" className="btn btn-circle  bg-opacity-20 text-white hover:bg-red-500 ">
            <FaArrowLeft className="z-10" />
            
            </a>
            <a href="#slide1" className="btn btn-circle bg-opacity-20 text-white hover:bg-red-500">
            <FaArrowRight />
            </a>
          </div>
          <div className="absolute  p-24 text-white z-10 space-y-7">
            <h1 className="text-6xl  font-bold  w-[480px]">Affordable Price For Car Servicing</h1>
            <p className="w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="bg-red-500 px-7 py-4 rounded">Discover More</button>
                <button className="px-7 py-3 rounded border-2 border-white ml-5 hover:bg-red-500 transition">Latest Project</button>
            </div>
          </div>
          <div className="absolute bg-black left-0 top-0 right-0 bottom-0 rounded-lg opacity-30 z-0  ">

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
