import React from 'react'

function HeadingTwoCard({headingTwo}) {
  return (
    <div className='p-4'>
        HeadingTwoCard
        <div className=' border border-red-300 p-3'>
            <h2>{headingTwo.title}</h2>
            <p>{headingTwo.text}</p>
        </div>
    </div>
  )
}

export default HeadingTwoCard