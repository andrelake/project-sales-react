import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className={"container"}>
                <div className={"jumbotron"}>
                    <h1 className={"display-4"}>Project Sales</h1>
                    <p className={"lead"}>Now you can see the statistics of your sales</p>
                    <hr/>
                    <p>This project shows a sales dashboard that has a backend build with Java and Spring</p>
                    <Link className={"btn btn-primary btn-lg"} to={"/dashboard"}>
                        Show Dashboard
                    </Link>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Home;
