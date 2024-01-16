import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Support from "../components/Support/Support";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Support></Support>
            <Products></Products>
        </div>
    );
};

export default Home;