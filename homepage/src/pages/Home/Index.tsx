import Home2Route from "../../components/Router/Routes/Home2Route";
import LinkHandler from "../../components/LinkHandler";

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <div><LinkHandler link={Home2Route} /></div>
        </>
    )
}

export default Home;
