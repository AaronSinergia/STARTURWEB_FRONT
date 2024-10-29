import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import './UndoBTN.scss';

const UndoBTN = () => {
  const { dispatch } = useContext(context);

  const handleUndo = () => {
    dispatch({ type: 'UNDO_LAST_ACTION' });
    localStorage.removeItem('selectedHeader');
    localStorage.removeItem('selectedBody');
    localStorage.removeItem('projectNameClicked');
    alert('Selección BORRADA!');
  };

  return (
    <div className="undo_btn">
      <img
        className="return_btn"
        src="./assets/icons/return_button.png"
        alt="return_btn"
        onClick={handleUndo}
      />
    </div>
  );
};

export default UndoBTN;
