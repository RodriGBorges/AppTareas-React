export const tareasReducer = (state = [], action) => {

    switch (action?.type) {
        case 'agregar':
            
        //AGREGAR elemento al array

            return [...state, action.payload]
        case 'borrar' :

        //ELIMINAR un elemento del array
            return state.filter(tarea => tarea.id !== action.payload)
        
        /* case 'tareaTerminada' :

            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        terminada: !tarea.terminada
                        //retorno todas las propiedades de la tarea y se pisa la terminada para actualizarla y cambiarla de false a true
                    }
                } else {
                    return tarea
                }
                else para que me devuelva las demas tareas que no matcheen con el if 
                sino me devolveria solo 1 
            }) */

        case 'tareaTerminada' :

            return state.map(tarea =>

                (tarea.id === action.payload)
                ? {
                    ...tarea,
                    terminada: !tarea.terminada
                }
                : tarea
            )
        
        default:
            return state;
    }
  
};
