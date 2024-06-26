"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import { useState, useEffect, useCallback, useRef, createContext, useContext } from "react";
import Modal from "@/components/Modal";
import SideMenuLeft from "@/components/SideMenuLeft";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const SidebarContext = createContext();
const CardOnTopContext = createContext(); 

export default function RootLayout({ children }) {
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [sections, setSections] = useState([]);

  const [cardOnTopIndex, setCardOnTopIndex] = useState(0);

  const changeCardOnTopIndex = (index)=> {
    setCardOnTopIndex(index);
  }



  useEffect(() => {
    // console.log(useDarkMode());
    const handleScroll = () => {

      // Check if the scroll position is greater than 0
      // if(sideMenuLeft.current){
      //   setOffset(sideMenuLeft.current.clientWidth);
      // }
      setIsScrolled(window.scrollY > 0);
      setIsFixed(window.scrollY > 230);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    ///Fetching Data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/section");
        const data = await response.json();
        setSections(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#0F172A" }}>
        {isSearchModalOpen && <Modal toggleModal={toggleModal} />}
        <DarkModeProvider>
          <Header isScrolled={isScrolled} toggleModal={toggleModal} />
          <Banner/>

          {/* <h1>cardOnTopIndex on parent component</h1>{cardOnTopIndex} */}
          <CardOnTopContext.Provider value={{cardOnTopIndex, changeCardOnTopIndex}}>
            <div className={"flex"}>
              <div
                className={`hidden lg:block lg:w-1/4 ${
                  isFixed ? "lg:fixed lg:top-12 lg:h-full" : ""
                }`}
              >
                <SideMenuLeft sections={sections} cardOnTopIndex = {cardOnTopIndex}/>
              </div>
              <div className={`w-full  lg:w-3/4 ${isFixed ? `lg:ml-[25%]` : ""}`}>
                <SidebarContext.Provider value={{ isFixed }}>
                  {/* Any Routed Page (Page.js - Routed Pages) is placed HERE in this Part */}
                  {children} 
                </SidebarContext.Provider>
              </div>
            </div>
          </CardOnTopContext.Provider>
        </DarkModeProvider>
      </body>
    </html>
  );
}

export function useCardOnTopContext() {
  const value = useContext(CardOnTopContext);
  if (!value) {
    throw new Error('useCardOnTopContext must be used within a CardOnTopProvider');
  }
  return value;
};