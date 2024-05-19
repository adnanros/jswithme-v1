"use Client"
import React from 'react'

function SearchBar({toggleModal}) {
  
  return (
    <div className='bg-indigo-400 cursor-pointer rounded-md px-3' onClick={toggleModal}>
        Search
    </div>
  )
}

export default SearchBar