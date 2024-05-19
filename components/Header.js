"use client";
import React from "react";
import { useState } from "react";
import { useDarkMode } from "../app/DarkModeContext";
import SearchBar from "./SearchBar";

function Header({isScrolled, toggleModal}) {
  // Mobile SideBar Toggler
  const [showSideBarAsMenu, setShowSideBarAsMenu] = useState(false);
  const sideBarToggler = () => {
    setShowSideBarAsMenu(!showSideBarAsMenu);
  };

  //Dark mode Context
  const {isDarkMode, toggleDarkMode } = useDarkMode();

  const clickHandler = () => {toggleDarkMode()}

  return (
    <div className={`grid grid-cols-3 w-full px-5 py-3 fixed z-10 ${isScrolled? 'opacity-80': ''}`}
    style={{background: isScrolled? '#0F172A': ''}}>
      <div>
        <span>LOGO</span><span>Brand</span>
        <button className="" onClick={sideBarToggler}>
          T
        </button>
        
      </div>
      <div><SearchBar toggleModal={toggleModal}/></div>
      <div className="flex justify-end">
        <button className="" onClick={clickHandler}>
          Dark Mode
        </button>
      </div>
      
      {showSideBarAsMenu && 
      <div className="bg-gray-900 top-12 absolute">Pop-up Menu</div>}
    </div>
  );
}

export default Header;
