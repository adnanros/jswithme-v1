"use client";
import React, { useContext, useRef } from 'react'
import { useState, useEffect } from "react";
import SubSectionCard from './SubSectionCard';
import { useCardOnTopContext } from '@/app/layout';

function MainSectionCard({section}) {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    // console.log('subSections', subSections);
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      let closestElement = null;
      let minDistance = Infinity;

      for (let child of children) {
        const rect = child.getBoundingClientRect();
        const distance = Math.abs(rect.top - scrollRef.current.getBoundingClientRect().top);

        if (distance < minDistance) {
          minDistance = distance;
          closestElement = child;
          // console.log('closestElement', closestElement.id)
        }
      }

      if(closestElement){ 
        changeCardOnTopIndex(closestElement.id)
      }
     
    }
    

  };
  const [subSections, setSubSections]= useState([]);

  const {cardOnTopIndex, changeCardOnTopIndex} = useCardOnTopContext();

  useEffect(() =>{
    const populateData =()=>{
      setSubSections(section.subSections);
    }
    populateData();

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      // Add the scroll event listener to the specific element
      scrollElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      }
      /** Important: Adding Event-Listener to whole Window is not applicable */

    

  },[section]) /***** Important: When you don't have prop here, the useEffect runs just before population */

  return (
    <div >
        MainSectionCard
        <h1>{cardOnTopIndex}</h1>
        <h2 className="text-white text-lg">{section.title}</h2>
        <div ref={scrollRef} style={{overflowY: 'scroll',height: '300px', backgroundColor: 'red', marginBottom: '3px  '}}>
        
        {subSections && subSections.map((subSection, index)=>
          <div key={index} id={subSection.id} className='h-10 bg-slate-200 mb-1 p-2 text-fuchsia-800 list-none'>
          <SubSectionCard subSection={subSection}/></div>)}
        </div>
    </div>
    
  )
}

export default MainSectionCard