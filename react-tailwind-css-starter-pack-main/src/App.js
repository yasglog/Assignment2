import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import UserData from "./Component/UserData";
import Searchbar from "./Component/Searchbar";
import { useContext } from "react";
import { MyContext } from "./Context/MyContext";

function App() {
  const {theme,setTheme}=useContext(MyContext) 

  return (
    <div className={`${theme!=="white"?('bg-black min-h-[750px] overflow-y-hidden'):('bg-[rgb(245,248,255);] h-[750px] overflow-hidden')}`}>
    <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/userdata" element={<UserData></UserData>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
