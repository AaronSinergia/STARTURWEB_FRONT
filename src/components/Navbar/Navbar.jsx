import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import { Link, useNavigate } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import {
  getReturnRoute,
  handleH1Click,
  handleReset,
} from '../../function/handleFunctions';
import './navbar.scss';

const Navbar = () => {
  const { state, dispatch } = useContext(context);
  const navigate = useNavigate();
  const returnRoute = getReturnRoute();

  return (
    <nav
      onMouseLeave={() => {
        dispatch({ type: 'SET_ITSON', payload: false });
        dispatch({ type: 'SET_ITSFOLDED', payload: false });
      }}
    >
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
        onClick={() => handleH1Click(state, navigate)}
      >
        {localStorage.getItem('user_id') ? <UserMenu /> : state.setHeader}
      </h1>

      <ul id="navbar_ul" className={state.itsOn ? 'show' : 'hide'}>
        <li>
          <Link to={returnRoute} onClick={() => handleReset(dispatch)}>
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
