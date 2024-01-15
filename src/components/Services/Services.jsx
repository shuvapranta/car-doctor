import { useEffect, useState } from "react";
import { FaArrowRight  } from "react-icons/fa6";

const Services = () => {
    const [datas , setDatas] = useState([])

    useEffect(() => {
        fetch("/services.json")
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
    
  return (
    <div className="px-36 mb-32">
      <div className="space-y-5 text-center">
        <h4 className="text-xl text-red-500 font-bold">Service</h4>
        <h2 className="text-5xl font-bold">Our service area</h2>
        <p className="max-w-3xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-12">
        {
            datas.map((service,idx) => <div key={idx} className="p-6 space-y-5 border-2 border-gray-300 rounded-lg">
            <figure><img src={service.img} alt="" className="w-80 rounded-lg h-48"/></figure>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <div className="flex text-red-500 justify-between">
                <p className="text-red-500 font-semibold"> Price : ${service.price}</p>
                <FaArrowRight></FaArrowRight>
              </div>
            </div>
          </div>)
        }
      </div>
      <button className="mx-auto block text-red-500 text-lg font-semibold mt-12 border-2 border-red-500 px-5 py-4 hover:bg-red-500 hover:text-white  rounded">More service</button>
    </div>
  );
};

export default Services;
