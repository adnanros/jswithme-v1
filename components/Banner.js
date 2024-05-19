import { useDarkMode } from "@/app/DarkModeContext";
import React from "react";

function Banner() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={"h-64 opacity-30"}
      style={{
        background: isDarkMode? "radial-gradient(ellipse at center, #0F172A, #eee)": "white",
      }}
    >
    </div>
  );
}

export default Banner;
