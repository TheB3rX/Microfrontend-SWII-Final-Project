import React from 'react'
import './ButtonGroup.css'
import addImage from '../assets/add.png';
import deleteImage from '../assets/delete.png';
import searchImage from '../assets/search.png';

export const ButtonGroup = ({onToggleAdd, onToggleDelete, onToggleSearch, handleAddTicket}) => {
  return (
    <div className="buttons">
        <button onClick={onToggleSearch}>
            <img src={searchImage} alt="buscar" width={50} />
        </button>
        <button onClick={onToggleDelete}>
            <img src={deleteImage} alt="eliminar" width={50} />
        </button>
        <button onClick={onToggleAdd}>
            <img src={addImage} alt="agregar" width={50} />
        </button>
    </div>
  )
}
