import React from "react";
import CategoryBoxMenu from "./CategoryBoxMenu";
import MousePositionContext from "@/Contexts/MousePositionOnMenuContext";

function SubMenuCard() {
  return (
    <MousePositionContext.Consumer>
      {(data) => (
        // submenucard style to apply the animation in global.css file
        <div className={`hidden submenucard bg-gray-200 flex-1 rounded-b-lg absolute p-3`}>
          <div className={`${data.mouseFromOutSide? '': data.mouseFromRight? 'submenucardslide': 'submenucardslideFromLeft'}`}><CategoryBoxMenu /></div>
          <div className={`${data.mouseFromOutSide? '': data.mouseFromRight? 'submenucardslide': 'submenucardslideFromLeft'}`}><CategoryBoxMenu /></div>
        </div>
      )}
    </MousePositionContext.Consumer>
  );
}

export default SubMenuCard;
