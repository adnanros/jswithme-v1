"use client";
import React, { useEffect, useRef } from "react";
import MainSectionCard from "./MainSectionCard";
import { useDarkMode } from "../app/DarkModeContext";


function Article({sections}) {
  const {isDarkMode, toggleDarkMode } = useDarkMode();
  

  return (
    <div className={isDarkMode? "":""}>
        Article
        {sections && sections.map((section, index) =><MainSectionCard key={index} section={section}/>)} 
    </div>
    )

}

export default Article;
