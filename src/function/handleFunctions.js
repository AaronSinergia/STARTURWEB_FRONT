import { fetchFunction } from './fetchFunction';

export const registerUser = async () => {
  event.preventDefault();
  const username = document.querySelector('#user').value;
  const password = document.querySelector('#password').value;

  const response = await fetchFunction({
    endpoint: 'users/register',
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (response.response.status === 200 || 201) {
    alert(`Bienvenido ${username}`);
  } else {
    alert('El usuario parece que ya existe.');
  }
};

export const loginUser = async () => {
  event.preventDefault();
  const username = document.querySelector('#user').value;
  const password = document.querySelector('#password').value;

  const response = await fetchFunction({
    endpoint: 'users/login',
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  console.log(response);

  // if (response.response.status === 200) {
  //   alert('El usuario o contraseña no existen');
  // } else {
  //   alert(`Bienvenido ${username}`);
  // }

  // if (response.response.assistant.isAdmin == 'Yes' && response.status === 200) {
  //   alert('Te has logado con usuario ADMIN');
  //   console.log('Te has logado con usuario ADMIN');
  // }
};

// export const registerUser = () => {};
