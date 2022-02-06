import React from 'react';

export const ItemTareas = ({tarea:{ id, descripcion, terminada }, i, handleDelete, handleUpdate}) => {

  return (

    <li className='d-flex justify-content-between align-item-center' key={id}>
      <p onClick={ () => handleUpdate(id)} className={terminada && 'text-decoration-line-through'}>
        {i + 1}.{descripcion}
      </p>
      <button className='btn btn-sm btn-danger mb-1' onClick={ () => handleDelete(id)}>
        <i className='fas fa-trash-alt'></i>
      </button>
    </li>

  );

};
