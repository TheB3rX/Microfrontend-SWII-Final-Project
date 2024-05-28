import React from 'react'
import './CheckboxAll.css'

export const CheckboxAll = ({ allChecked, onChange}) => {
  return (
    <div className="checkbox_all">
    <input type="checkbox" id="miCheckbox" checked={allChecked} onChange={onChange} />
  </div>
  )
}