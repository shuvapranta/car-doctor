import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;