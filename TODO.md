1) hacer loadings en las peticiones por si tarda (lazy suspense), al hacer login, register, guardar algo, o borrar algo

XXXXXX revisar parte plantilla web se ve mal en algunos formatos (hablar con Santi y preguntarle, yo no veo nada raro, en ningún tamaño....)

3) REVISAR QUE cuando clico en uno de mis proyectos en misproyectos, aparezca el proyecto completo el input del titulo darle estilos (mirar que no venga de por aqui el erro

  const handleUndo = () => {
    dispatch({ type: 'UNDO_LAST_ACTION' });
    localStorage.removeItem('selectedHeader');
    localStorage.removeItem('selectedBody');
    localStorage.removeItem('projectNameClicked');
    notify();
  };

)