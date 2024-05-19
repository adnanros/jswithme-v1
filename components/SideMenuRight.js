import React from 'react'

function SideMenuRight({topicHeadings}) {
  return (
    <div className='p-5 border border-yellow-400'>
      {topicHeadings && topicHeadings.map((heading, index)=><h3 key={index}>{heading.title}</h3>)}
    </div>
  )
}

export default SideMenuRight