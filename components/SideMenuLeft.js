import Link from 'next/link'
import React from 'react'

function SideMenuLeft({sections, cardOnTopIndex}) {
  return (
    <div className='p-5'>
        {/* <div>kkkkkkkkkkk- {cardOnTopIndex}</div> */}
        {
            sections.map((section, index)=>( /** Important: index is the second parameter */
                <div key={index} className='mb-3'>
                    {/* Correct */}
                    <Link href={`/docs/${section.id}`}>{section.title}</Link>
                    <ul className='pl-3'>
                        {section.subSections.map((subSection, index)=>(
                        <li key={index}><Link href={`/docs/${section.id}/${subSection.id}`} className={subSection.id === Number(cardOnTopIndex)? 'text-red-400' : ''}>{subSection.title + '-' + subSection.id}</Link></li>
                        /** Important: Type chacking - Number()~!!!! */
                        ))}
                    </ul>
                </div>
            ))
        }
          
      
    
    </div>
  )
}

export default SideMenuLeft