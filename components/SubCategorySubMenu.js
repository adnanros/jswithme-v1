import React from 'react'

function SubCategorySubMenu() {
  return (
    <div>
        <div className="hover:bg-gray-600 flex p-1 border-b-2 border-b-gray-400">
          <div className="bg-green-200">Logo</div>
          <div className="bg-yellow-200">
            <div>Sub-title-1</div>
            <div className="bg-blue-200">Description</div>
          </div>
        </div>
    </div>
  )
}

export default SubCategorySubMenu