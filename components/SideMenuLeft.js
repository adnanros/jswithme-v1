import Link from 'next/link'
import React from 'react'

function SideMenuLeft({sections, cardOnTopIndex}) {
  return (
    <div className='p-5'>
        <div>kkkkkkkkkkk- {cardOnTopIndex}</div>
        {
            sections.map((section)=>(
                <div className='mb-3'>
                    {/* Correct */}
                    <Link href={`/docs/${section.id}`}>{section.title}</Link>
                    <ul className='pl-3'>
                        {section.subSections.map((subSection)=>(
                        <li><Link href={`/docs/${section.id}/${subSection.id}`}>{subSection.title}</Link></li>
                        ))}
                    </ul>
                </div>
            ))
        }
          
      
    
    </div>
  )
}

export default SideMenuLeft