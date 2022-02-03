import React, { useEffect, useReducer } from 'react';
import { tareasReducer } from './Reducers/tareasReducer';
import { useForm } from './Hooks/useForm'
import './App.css';


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

  const [{descripcion}, handleInputChange, reset ] = useForm({
    descripcion: ''
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  
  }, [tareas]);
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(descripcion.trim().length < 1) {
      return
    }

    let nuevaTarea = {
      id: new Date().getTime(),
      descripcion,
      terminada: false
    }
  
    const agregarTarea = {
      type: 'agregar',
      payload: nuevaTarea
    }
  
    dispatch(agregarTarea);

    reset()

  }

  const handleDelete = (id) => {

    const borrarTarea = {
      type: 'borrar',
      payload: id
    }

    dispatch(borrarTarea);
  }


  return (
    <div>
      <h1>Tareas App</h1>
      <hr/>
      <h4>Total tareas: {tareas.length}</h4>
      <hr/>
      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush px-4'>
            {
              tareas.map( ({descripcion, terminada, id}, i) => (
                <li className='d-flex justify-content-between align-item-center' key={descripcion + i}>
                  <p>
                    {i + 1}.{descripcion}
                  </p>
                  <button className='btn btn-sm btn-danger mb-1' onClick={ () => handleDelete(id)}>
                    <i className='fas fa-trash-alt'></i>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Aprender..." autoComplete="off" className="form-control" value={descripcion} name='descripcion'onChange={handleInputChange}/>
            <button type='submit' className='btn btn-primary w-100 mt-2'>Agregar</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
