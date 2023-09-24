import React, { useContext } from "react";
import { Link } from "react-router-dom";
import owl from "../Assests/owl.jpg";
import { MyContext } from "../Context/MyContext";
import { MdDarkMode } from 'react-icons/md';
import {BsSun} from 'react-icons/bs'


const Navbar = () => {
  const { theme, setTheme } = useContext(MyContext);
  function themeHandler(){
    setTheme("black")
  }
  function themeHandlersec(){
    setTheme("white")
  }
 
  return (
    <div className="flex h-14 items-center justify-center  py-4 ">
      <div className=" flex w-11/12 max-w-maxContent items-center ">
        {/* <Link to="/"> */}
        {/* <img src={logo} width={160} height={42} loading="lazy"></img> */}
        <h2 className={`flex items-center  text-2xl gap-2 font-serif font-semibold ${theme==="white"?('text-richblack-800 '):(' text-white')}`}>
          <img src={owl} className=" w-10"></img>
          Github Finder
        </h2>
        {/* </Link> */}

        {/* <img src={logo} width={160} height={42} loading="lazy"></img> */}

        {/* NavLink */}

        <nav className=" flex items-center justify-center mx-auto">
          <ul className="flex gap-x-6 text-richblack-25 items-center justify-center">
            <div className="flex  items-center justify-center group relative gap-8">
              <Link to="/">
                <p className={`font-serif text-lg cursor-pointer ${theme==="white"?('text-richblack-800'):(' text-white')}`}>
                  Home
                </p>
              </Link>
              <p className={`font-serif text-lg cursor-pointer ${theme==="white"?('text-richblack-800'):(' text-white')}`}>
                About Us
              </p>
              <p className={`font-serif text-lg cursor-pointer ${theme==="white"?('text-richblack-800'):(' text-white')}`}>
                Contact Us
              </p>
            </div>
          </ul>
        </nav>

        {/* .....signup login dashboard....#6674CC */}

        <div className="flex gap-x-6 items-center">
          {/* <p className=" text-[#6674CC]">{currentUser ? currentUser?.email : ""}</p> */}
          <div className='flex gap-3 items-center' >
        {
            theme==="white"?(<h2 className={`text-2xl font-medium font-serif `}>Light</h2>
            ):(<h2  className=' text-2xl font-medium font-serif text-white'>Dark</h2>
            )
        }
        {
          theme==="white"?(<MdDarkMode onClick={themeHandler} className=' text-xl'></MdDarkMode>
          ):(<BsSun  onClick={themeHandlersec} className='text-white text-xl'></BsSun>)
        }
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
