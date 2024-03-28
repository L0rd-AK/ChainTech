import Banner from "../banner/Banner";
import ServiceSection from "../card section/ServiceSection";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ServiceSection />
            <Footer />
        </div>
    );
};

export default Home;