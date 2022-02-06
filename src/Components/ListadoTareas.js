import React from 'react';

export const ListadoTareas = ({tareas, handleDelete, handleUpdate}) => {

  return (

    <ul className='list-group list-group-flush px-4'>
      {
        tareas.map( ({descripcion, terminada, id}, i) => (
          //map i = indice, recorrido del map 0,1,2,3,4...
          <li className='d-flex justify-content-between align-item-center' key={descripcion + i}>
            <p onClick={ () => handleUpdate(id)} className={terminada && 'text-decoration-line-through'}>
              {i + 1}.{descripcion}
            </p>
            <button className='btn btn-sm btn-danger mb-1' onClick={ () => handleDelete(id)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </li>
        ))
      }
    </ul>

  );

};
