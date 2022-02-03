const initialState = [
    {
      id: 1,
      tarea: 'Aprender React',
      completada: false
    }
  ];
  
  const tareasReducer = (state = initialState, action) => {
  
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
