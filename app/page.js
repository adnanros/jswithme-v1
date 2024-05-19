"use client"
import { useState, useEffect } from "react";

import Article from "../components/Article";
import {InnerLayout} from "./InnerLayout";


export default function Home({isFixed}) {
  useEffect (() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch('/api/section');
        const data = await response.json();
        setSections(data);
      } catch(error){
        console.log(error)
      }
    };
  fetchData();  
    
  }, []);
  const [sections, setSections]= useState([]);  
  // console.log('==============', sections);

  //Dark mode Context
  return (
    <InnerLayout topicHeadings={sections}>
      
      <main className="flex w-full min-h-screen flex-col justify-between p-4 bg-green-400">
          <Article sections={sections}/>
      </main>
    </InnerLayout>
  );
}
