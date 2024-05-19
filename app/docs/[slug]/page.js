import HeadingTwoCard from '@/components/HeadingTwoCard';
// import React, { useContext, useEffect } from 'react';
// import { useCardOnTopContext } from '../../../app/InnerLayout';
import {InnerLayout} from '@/app/InnerLayout';


async function getSectionData({slug}) {
  const res = await fetch(`http://localhost:3000/api/docs/${slug}`) // FindUnique on Heading1 with its all Heading2 children
  const result = await res.json();
  return result;
}

export default async function SectionPage({params, isFixed}) {
  const {slug} = params; // Get the slug from the URL parameter as an id of heading1
  const sectionData = await getSectionData({slug});

  // const cardRefs = useRef(Array.from({length:sectionData.length}, ()=> React.createRef()));
  
  // useEffect(()=> {
  //   const handleScroll = ()=> {
  //     cardRefs.current.forEach((cardRef, index)=>{
  //       if(cardRef.current){
  //         const {top} = cardRef.current.getBoundingClientRect();
  //         if(top <= 0){
  //           console.log(`Card ${index} is at the top`);
  //         }
  //       }
  //     })
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return ()=>{
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  //using context of Card-Index
  //const { cardOnTopIndex, changeCardOnTopIndex} = useCardOnTopContext();
  
  return (
    <InnerLayout topicHeadings={sectionData.subSections}>
        <div>
            {sectionData.subSections.map((headingTwo, index)=><HeadingTwoCard key={index} headingTwo={headingTwo}/>)}
        </div>
    </InnerLayout>
  )
}






// export async function generateStaticParams() {
//   const sections = await fetch('http://localhost:3000/api/section').then((res) => res.json())
 
//   return sections.map((section) => ({
//     slug: section.id,
//   }))
// }

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/section'); // FindMany on Heading1
  const sections = await response.json();
  const paths = sections.map((section)=>`/docs/${section.id}`);

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration
  };
}