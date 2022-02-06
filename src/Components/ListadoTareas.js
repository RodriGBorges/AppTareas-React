import React from 'react';
import { ItemTareas } from './ItemTareas';

export const ListadoTareas = ({tareas, handleDelete, handleUpdate}) => {

  return (

    <ul className='list-group list-group-flush px-4'>
      {
        tareas.map( (tarea, i) => (
          //map i = indice, recorrido del map 0,1,2,3,4...
          
          <ItemTareas
            key= {tarea.id}
            tarea= {tarea}
            i = {i}
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
          />

        ))
      }
    </ul>

  );

};
