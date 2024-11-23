import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import { toastSuccess } from '../../function/toastAlerts';
import './UndoBTN.scss';

const UndoBTN = () => {
  const { dispatch } = useContext(context);

  const handleUndo = () => {
    dispatch({ type: 'UNDO_LAST_ACTION' });
    localStorage.removeItem('selectedHeader');
    localStorage.removeItem('selectedBody');
    localStorage.removeItem('projectNameClicked');
    toastSuccess('Selección borrada!');
  };

  return (
    <>
      <img
        className="return_btn"
        src="./assets/icons/return_button.png"
        alt="return_btn"
        onClick={handleUndo}
      />
    </>
  );
};

export default UndoBTN;
