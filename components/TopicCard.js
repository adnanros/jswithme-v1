import React from 'react'

function TopicCard({topic}) {
  return (
    <div className=' border border-green-300 p-4'>
        <h2>{topic.title}</h2>
        <p>{topic.text}</p>
    </div>
  )
}

export default TopicCard