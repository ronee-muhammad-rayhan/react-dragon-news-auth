import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="text-3xl font-poppins font-bold">This is Homepage</div>
        </div>
    );
};

export default Home;