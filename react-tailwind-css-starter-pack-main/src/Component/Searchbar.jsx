import React, { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const {searchVal,setSearchVal} = useContext(MyContext);

const [inputValue,setInputValue]=useState('');
 const navigate=useNavigate();


  function datasearchForm(e) {
    e.preventDefault();
    console.log(inputValue)
      setSearchVal(inputValue);
      setInputValue("")
      navigate("/userdata")
  }
  function UserIdHandler(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  

  return (
    <div className=" w-[60%] mx-auto flex items-end  justify-around mt-10 mb-8">
      <form className=" w-[70%] flex flex-row justify-end gap-4" onSubmit={datasearchForm}>
        <input
          placeholder="Enter the Github Username "
          value={inputValue}
          onChange={UserIdHandler}
          className=" py-3 w-[50%] border-2 outline-none rounded-md text-center"
        />
        <button className="btn2  w-[20%] py-3 rounded-md bg-[#6674CC]">
          <h3 className=" text-white">Search</h3>
        </button>
      </form>
      
    </div>
  );
};

export default Searchbar;
