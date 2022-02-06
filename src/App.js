import React, { useEffect, useReducer } from 'react';
import { tareasReducer } from './Reducers/tareasReducer';
import { AgregarTarea } from './Components/AgregarTarea';
import './App.css';
import { ListadoTareas } from './Components/ListadoTareas';


/* const initalState = [
  {
    id: new Date().getTime(),
    descripcion: "Aprender React",
    terminada: false
  }
] */

const init = () => {
  /* return [
    {
      id: new Date().getTime(),
      descripcion: "Aprender React",
      terminada: false
    }
  ] */

  return JSON.parse(localStorage.getItem('tareas')) || []
  // si existe tareas en localStorage te lo traigo, sino te doy un array vacío
}

function App() {

  const [tareas, dispatch] = useReducer(tareasReducer, [], init);
  /* console.log(tareas) */

  

  //useEffect atento a cualquier cambio en las tareas y actualiza el localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  
  }, [tareas]);
  
  // accion de agregar una nueva tarea
  const handleAdd = (nuevaTarea) => {

    const agregarTarea = {
      type: 'agregar',
      payload: nuevaTarea
    }

    dispatch(agregarTarea)
  }

  const handleDelete = (id) => {
    //acción de borrar
    const borrarTarea = {
      type: 'borrar',
      payload: id
    }

    dispatch(borrarTarea);
  }

  const handleUpdate = (id) => {
    //acción de actualizar tarea 
    const tareaTerminada = {
      type: 'tareaTerminada',
      payload: id
    }

    dispatch(tareaTerminada);
  }


  return (
    <div>
      <h1>Tareas App</h1>
      <hr/>
      <h4>Total tareas: {tareas.length}</h4>
      <hr/>
      <div className='row'>
        <div className='col-7'>
          <ListadoTareas
          //pasamos por props las tareas, y los métodos de borrar tarea y actualizar tarea
            tareas = {tareas}
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
          />
        </div>
        <div className='col-5'>
          <AgregarTarea
            handleAdd={handleAdd}
            // se envia la accion de agregar nueva tarea por props
          />
        </div>

      </div>
    </div>
  );
}

export default App;

/* 
className={terminada && 'text-decoration-line-through'}
if ternario reducido = &&
si terminada está en true se pone lo siguiente como className 
*/