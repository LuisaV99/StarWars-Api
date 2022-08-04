import NavbarApp from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import HomePage from "./Pages/HomePages";
import { Route, Routes } from "react-router-dom";

function App () {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/page' element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;