import NavbarApp from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import HomePage from "./Pages/HomePages";
import { Route, Routes } from "react-router-dom";
import Planetas from "./Pages/Planetas/index"
import Personajes from "./Pages/Personajes/index"
import DetailsPerson from "./Pages/DetailsPerson/DetailsPerson"
import DetailsPlanet from "./Pages/DetailsPlanet/DetailsPlanet"

function App () {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/planetas' element={<Planetas/>}></Route>
        <Route path='/personajes' element={<Personajes/>}></Route>
        <Route path='/detailsperson/:nombres/:num' element={<DetailsPerson/>}></Route>
        <Route path='/detailsplanet/:nombres/:num' element={<DetailsPlanet/>}></Route>
        {/* <Route path='/page' element={<HomePage/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  )
}


export default App;