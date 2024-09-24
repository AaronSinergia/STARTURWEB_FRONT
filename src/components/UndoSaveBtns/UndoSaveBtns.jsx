import React, { useContext, useEffect } from 'react';
import { context } from '../../hooks/context/context';
import { registerNewWebPage } from '../../function/handleFunctions';
import './UndoSaveBtns.scss';

const UndoSaveBtns = () => {
  const { state, dispatch } = useContext(context);

  useEffect(() => {
    const savedHeader = localStorage.getItem('selectedHeader');
    if (savedHeader) {
      dispatch({ type: 'SET_SELECTED_HEADER', payload: savedHeader });
    }

    const savedBody = localStorage.getItem('selectedBody');
    if (savedBody) {
      dispatch({ type: 'SET_SELECTED_BODY', payload: savedBody });
    }
  }, [dispatch]);

  const handleUndo = () => {
    dispatch({ type: 'UNDO_LAST_ACTION' });
    localStorage.removeItem('selectedHeader');
    localStorage.removeItem('selectedBody');
    alert('Selección BORRADA!');
  };

  return (
    <div className="undo_save_btns">
      <button className="undo_button" onClick={handleUndo}>
        Deshacer Selección
      </button>
      <button className="save_button" onClick={() => registerNewWebPage(state)}>
        Guardar Selección
      </button>
    </div>
  );
};

export default UndoSaveBtns;
