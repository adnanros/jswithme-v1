"use client";
import React, { useContext, useRef } from 'react'
import { useState, useEffect } from "react";
import SubSectionCard from './SubSectionCard';
import { useCardOnTopContext } from '@/app/layout';

function MainSectionCard({section}) {

  const [subSections, setSubSections]= useState([]);
  // const [cardOnTopIndex, setCardOnTopIndex] = useState([]);
  const {cardOnTopIndex, changeCardOnTopIndex} = useCardOnTopContext();

  useEffect(() =>{
    const populateData =()=>{
      setSubSections(section.subSections);
    }
    populateData();



    const handleArticleScroll = ()=> {
        // //setCardOnTopIndex(!cardOnTopIndex);
        // console.log("cardOnTopIndex", cardOnTopIndex)
        //   // const scrollTop = article.current.scrollTop;
        //   // console.log("handleArticleScroll", scrollTop);
        const firstVisibleCard = subSections.find((subSection)=>{
          const cardElement = document.getElementById(subSection.id);
          if(cardElement){
            const { top, bottom} = cardElement.getBoundingClientRect();
            if(top <= window.innerHeight && bottom >= 0)
            return true;
          }
          return false;
        });

        // console.log('==============', firstVisibleCard);

        if(firstVisibleCard){ 
          changeCardOnTopIndex(firstVisibleCard.id)
        }
    }  
    
    window.addEventListener('scroll', handleArticleScroll);
    return () => {
        window.removeEventListener('scroll', handleArticleScroll);
      }

  },[])

  

  // const cardRefs = Array.from({length: section.subSections.length}, ()=>useRef(null));
  // const article = useRef(null);

  //**********************************************
  //************************ */

  // useEffect(() => {
  //   const handleArticleScroll = ()=> {
  //     const scrollTop = article.current.scrollTop;
  //     console.log("handleArticleScroll", scrollTop);
  //   }


  
  //   article.current.addEventListener('scroll', handleArticleScroll);
  
  // return () => {
  //   article.current.removeEventListener('scroll', handleArticleScroll);
  // }
    
  // }, [])
  

  //onClick={changeCardOnTopIndex}

  console.log('==============', subSections);

  return (
    <div className='flex flex-col'  >
        MainSectionCard
        <h1>{cardOnTopIndex}</h1>
        <h2 className="text-white text-lg">{section.title}</h2>
        {subSections && subSections.map((subSection, index)=>
          <li key={index} id={subSection.id} className='h-10'>
          <SubSectionCard subSection={subSection}/></li>)}
    </div>
  )
}

//ref={cardRefs[index]}
//
export default MainSectionCard