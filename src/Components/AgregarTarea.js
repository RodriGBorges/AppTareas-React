import React from 'react';
import { useForm } from '../Hooks/useForm';

//se trae handleAdd por props
export const AgregarTarea = ({handleAdd}) => {

    const [{descripcion}, handleInputChange, reset ] = useForm({
        descripcion: ''
    });

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

        //se le pasa la nueva tarea que viaja a través de las props
        handleAdd(nuevaTarea)
    
        reset()
    
    }

    return (

    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Aprender..." autoComplete="off" className="form-control" value={descripcion} name='descripcion'onChange={handleInputChange}/>
        <button type='submit' className='btn btn-primary w-100 mt-2'>Agregar</button>
    </form>

    )
};
