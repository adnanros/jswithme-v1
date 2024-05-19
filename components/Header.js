"use client";
import React from "react";
import { useState } from "react";
import { useDarkMode } from "../app/DarkModeContext";
import SearchBar from "./SearchBar";
import MainMenu from "./MainMenu";

function Header({isScrolled, toggleModal}) {
  // Mobile SideBar Toggler
  const [showSideBarAsMenu, setShowSideBarAsMenu] = useState(false);
  const sideBarToggler = () => {
    setShowSideBarAsMenu(!showSideBarAsMenu);
  };

  //Dark mode Context
  const {isDarkMode, toggleDarkMode } = useDarkMode();

  const clickHandler = () => {toggleDarkMode()}

  // Static Menu Items
  const menuItems = [{title: "FirstItem"}, {title: "SecondItem"}];
  return (
    <div className={`grid grid-cols-3 w-full px-5 py-3 fixed z-10 ${isScrolled? 'opacity-80': ''}`}
    style={{background: isScrolled? '#0F172A': ''}}>
      
      <div className="flex">
      <span className="mx-2">LOGO</span>
        {/* Main Menu Components Contains nested 
        components [SubMenuCard, SubCategorySubMenu,] */}
        <MainMenu items={menuItems}/> 
        <button className="lg:hidden" onClick={sideBarToggler}>
          Menu-Mob
        </button>

        {/* Mobile Menu Should be placed here */}
        
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
