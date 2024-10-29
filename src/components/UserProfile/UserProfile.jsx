import React, { useState, useEffect } from 'react';
import { fetchFunction } from '../../function/fetchFunction';
import Button from '../Button/Button';
import './UserProfile.scss';

const UserProfile = () => {
  const userID = localStorage.getItem('user_id');

  const [profile, setProfile] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const { response } = await fetchFunction({
        endpoint: `users/${userID}`,
        method: 'PUT',
      });
      if (response) {
        setProfile({
          name: response.name || '',
          password: '',
        });
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { status, response } = await fetchFunction({
      endpoint: `users/${userID}`,
      method: 'PUT',
      body: JSON.stringify(profile),
    });

    if (status === 200) {
      setMessage('Perfil actualizado correctamente');
    } else {
      setMessage('Error al actualizar el perfil');
    }
  };

  return (
    <div className="user-profile">
      <h2 className="title_myprofile">Mi Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">CAMBIAR USUARIO</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">CAMBIAR CONTRASEÑA</label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
        <Button
          className={'submit_btn'}
          type={'submit'}
          text={'Guardar Cambios'}
        />
      </form>

      {message && <p className="error_message">{message}</p>}
    </div>
  );
};

export default UserProfile;
