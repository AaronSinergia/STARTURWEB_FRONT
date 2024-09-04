import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Button from '../Button/Button';

const Navbar = () => {
  const { state, dispatch } = useContext(context);
  const returnRoute = localStorage.getItem('user_id')
    ? '/start_project'
    : '/login';

  return (
    <nav onMouseLeave={() => dispatch({ type: 'SET_ITSON', payload: false })}>
      <img
        src="/assets/icons/nav_icon.png"
        alt="title_logo"
        onMouseEnter={() => dispatch({ type: 'SET_ITSON', payload: true })}
      />

      <h1
        className={`header_h1 ${state.itsOn ? 'hide' : ''}`}
        onMouseEnter={() => {
          dispatch({ type: 'SET_HEADER', payload: 'Volver a Home' });
        }}
        onMouseLeave={() => {
          dispatch({ type: 'SET_HEADER', payload: 'star(t)UrWeb' });
        }}
      >
        <Link to="/">
          {localStorage.getItem('user_id') ? (
            <Button
              onClick={() => localStorage.removeItem('user_id')}
              className={'logout_button'}
              text={'Cerrar Sesión'}
            />
          ) : (
            state.setHeader
          )}
        </Link>
      </h1>

      <ul className={state.itsOn ? 'show' : 'hide'}>
        <li>
          <Link to={returnRoute}>
            {localStorage.getItem('user_id') ? 'Volver' : 'Iniciar Sesión'}
          </Link>
        </li>
        <li>
          <Link to="/about">Sobre Noso(t)ros</Link>
        </li>
        <li>
          <Link to="/contact">Con(t)acto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
