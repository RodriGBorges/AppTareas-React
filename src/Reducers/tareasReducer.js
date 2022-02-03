export const tareasReducer = (state = [], action) => {

    switch (action?.type) {
        case 'agregar':
            
        //AGREGAR elemento al array

            return [...state, action.payload]
        case 'borrar' :

        //ELIMINAR un elemento del array
            return state.filter(tarea => tarea.id !== action.payload)
        
        default:
            return state;
    }
  
};
