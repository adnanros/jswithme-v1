"use Client"
import React from 'react'

function SearchBar({toggleModal}) {
  
  return (
    <div className='bg-indigo-400 cursor-pointer' onClick={toggleModal}>
        Search
    </div>
  )
}

export default SearchBar