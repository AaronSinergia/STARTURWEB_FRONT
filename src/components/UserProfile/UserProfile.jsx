import React, { useState, useEffect } from 'react';
import { fetchFunction } from '../../function/fetchFunction';
import Button from '../Button/Button';
import { toastSuccess, toastWarning } from '../../function/toastAlerts';
import './UserProfile.scss';

const UserProfile = () => {
  const userID = localStorage.getItem('user_id');

  const [profile, setProfile] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const { response } = await fetchFunction({
        endpoint: `users/${userID}`,
        method: 'PUT',
      });
      if (response) {
        setProfile({
          username: response.name || '',
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

    console.log(profile);

    const { status, response } = await fetchFunction({
      endpoint: `users/${userID}`,
      method: 'PUT',
      body: JSON.stringify(profile),
    });

    console.log(response);

    if (status === 200) {
      toastSuccess('Perfil actualizado correctamente');
    } else {
      toastWarning(
        'Error al actualizar el perfil. El usuario o contraseña ya existen.'
      );
    }
  };

  return (
    <div className="user-profile">
      <h2 className="title_myprofile">Mi Perfil</h2>
      <form>
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
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default UserProfile;
