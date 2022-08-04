import Cards from "./Cards/card";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider/index";

function Home () {
  return (
    <div className="App">
        <Slider/>
        <Cards/>
    </div>
  )
}

export default Home;