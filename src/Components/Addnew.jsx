import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export const Addnew = ({toggleIsAdding}) => {
  return (
    <div style={{ userSelect: 'none' }} id="addNew" onClick={toggleIsAdding}>
      <span>Add New Task</span>
      <FaPlus className='plus-icon'/>
    </div>
  )
}
