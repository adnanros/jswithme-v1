"use client"
import React, { createContext, useContext, useState } from 'react'
import SideMenuRight from '@/components/SideMenuRight'
import { SidebarContext } from './layout';


export const InnerLayout = ({ children, topicHeadings }) => {
  let { isFixed } = useContext(SidebarContext);
  



  return (
    <div className='flex w-full h-full'>
      
        <div className={`${topicHeadings? 'w-full xl:w-2/3': 'w-full'} + ${isFixed? '': ''}`}>
          {children}
        </div>
      
      
      <div className={`${topicHeadings? 'hidden xl:block xl:h-full': 'hidden'} + ${isFixed? 'fixed top-12 left-3/4 xl:w-1/4': 'xl:w-1/3'}`}>
        <div>
          <SideMenuRight topicHeadings={topicHeadings}/>
        </div>
      </div>
      
    </div>
    
  )
}



