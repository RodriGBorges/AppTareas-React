const initialState = [
    {
      id: 1,
      tarea: 'Aprender React',
      completada: false
    }
  ];
  
  const tareasReducer = (state = initialState, action) => {
    //action = agregar, eliminar, modificar
    //si existe action (?) mostrame type 
    switch (action?.type) { 
      case 'agregar':
  
        return [...state, action.payload];
  
      default:
        return state;
    }
  }
  
  let tareas = tareasReducer();
  /* console.log(tareas); */
  
  const nuevaTarea = {
    id: 2,
    tarea: 'Aprender Mongo',
    completada: false
  }
  
  const agregarTarea = {
    type: 'agregar',
    payload: nuevaTarea
  }
  
  tareas = tareasReducer(tareas, agregarTarea)
  
  console.log(tareas);
/* 
Una alternativa a useState. Acepta un reducer de tipo (state, action) => newState y devuelve 
el estado actual emparejado con un método dispatch. (Si está familiarizado con Redux, ya sabe cómo funciona).

https://es.reactjs.org/docs/hooks-reference.html#usereducer
*/