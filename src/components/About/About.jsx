import aboutimg from "/images/about_us/person.jpg";
import aboutimg2 from "/images/about_us/parts.jpg";


const About = () => {
    return (
        <div className="my-32 grid grid-cols-1 md:grid-cols-2 px-36 gap-10">
            <div className="relative ">
                <div className=" ">
                    <img src={aboutimg} alt="" className="rounded-lg w-[460px] h-[473px]" />
                </div>
                <div className="absolute  -bottom-16 right-14 border-4 border-white rounded-lg">
                    <img src={aboutimg2}alt="" className="  w-[328px] h-[332px]" />
                </div>
            </div>
            <div className="space-y-5">
                <h4 className="text-xl text-red-500 font-bold">About us</h4>
                <h2 className="text-5xl font-bold w-[376px] mb-2">We are qualified & of experience in this field</h2>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="px-7 py-4 bg-red-500 text-lg font-semibold mt-2 text-white rounded">Get more info</button>
            </div>
        </div>
    );
};

export default About;