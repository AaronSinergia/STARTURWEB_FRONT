import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const { state, dispatch } = useContext(context);

  return (
    <nav onMouseLeave={() => dispatch({ type: 'SET_ITSON', payload: false })}>
      <img
        src="/assets/icons/nav_icon.png"
        alt="title_logo"
        onMouseEnter={() => dispatch({ type: 'SET_ITSON', payload: true })}
      />
      <Link to="/">
        <h1
          className={`header_h1 ${state.itsOn ? 'hide' : ''}`}
          onMouseEnter={() => {
            dispatch({ type: 'SET_HEADER', payload: 'Volver' });
          }}
          onMouseLeave={() => {
            dispatch({ type: 'SET_HEADER', payload: 'star(t)UrWeb' });
          }}
        >
          {state.setHeader}
        </h1>
      </Link>
      <ul className={state.itsOn ? 'show' : 'hide'}>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
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
