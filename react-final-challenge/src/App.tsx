//import MainNav from "./components/MainNav/MainNav";
import './App.css'
import NavBar from "../src/components/layout/Header/Header"
import Footer from "../src/components/layout/Footer/Footer"

import { Outlet } from "react-router-dom";

//import Footer from "./components/layout/Footer/Footer";
//import NavBar from "./components/layout/navBar/NavBar";

function App() {
  return (
    <div className="content-container">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;
