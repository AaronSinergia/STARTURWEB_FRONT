import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../hooks/context/context';
import Button from '../Button/Button';
import './UserMenu.scss';

const UserMenu = () => {
  const { state, dispatch } = useContext(context);
  const userLogged = localStorage.getItem('USERNAME');

  return (
    <div
      className="user-menu"
      onMouseEnter={() => dispatch({ type: 'SET_ITSFOLDED', payload: true })}
      onMouseLeave={() => dispatch({ type: 'SET_ITSFOLDED', payload: false })}
    >
      <img src="/assets/icons/login_icon.png" alt="login_icon" />
      <h3 className="userlogged_title">{userLogged}</h3>

      <ul id="dropdown_menu" className={state.itsFolded ? 'shownavbar' : ''}>
        <Link to="/userprofile">
          <li className="userlogged_li">Mi Perfil</li>
        </Link>
        <Link to="/userprojects">
          <li className="userlogged_li">Mis Proyectos</li>
        </Link>

        <Link to="/login">
          <Button
            onClick={() => {
              localStorage.removeItem('user_id');
              localStorage.removeItem('USERNAME');
              localStorage.removeItem('TOKEN');
            }}
            className={'logout_button'}
            text={'Cerrar Sesión'}
          />
        </Link>
      </ul>
    </div>
  );
};

export default UserMenu;
