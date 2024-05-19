import React, { useState } from "react";
import SubMenuCard from "./SubMenuCard";
import MousePositionContext from "@/Contexts/MousePositionOnMenuContext";

function MainMenu({ items }) {
  const [mouseFromOutSide, setMouseFromOutSide] = useState(false);
  const [mouseFromRight, setMouseFromRight] = useState(false);

  const handleMouseEnter = (e) => {
    
    setMouseFromOutSide(true);
    console.log(mouseFromOutSide);
  };

  const handleMouseOut = (e) => {
    setMouseFromOutSide(false);
  };

  const handleMouseDirection = (e) => {
    const mouseX = e.clientX;
    const isEnteredFromRight = mouseX > e.target.getBoundingClientRect().left + e.target.offsetWidth / 2;
    setMouseFromRight(isEnteredFromRight);
  }
  

  return (
    <MousePositionContext.Provider value={{mouseFromOutSide, mouseFromRight}}>
      <div onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
        <ul className="hidden lg:flex lg:space-x-2">
          {items &&
            items.map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 hover:rounded-t-md group"
                onMouseEnter={handleMouseDirection}
              >
                {item.title}
                <SubMenuCard></SubMenuCard>
              </li>
            ))}
         
        </ul>
      </div>
    </MousePositionContext.Provider>
  );
}

export default MainMenu;
