import { fetchFunction } from './fetchFunction';

export const registerUser = async (navigate) => {
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

  console.log(response);

  if (response.status === 201) {
    alert(`Bienvenido ${username}`);
    localStorage.setItem('user_id', response.response._id);
    navigate('/start_project');
  } else {
    alert(
      'Ya se ha registrado un usuario con ese nombre o el usuario/contraseña no han sido especificados.'
    );
  }
};

export const loginUser = async (navigate) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
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

  if (response.status === 200) {
    alert(`Bienvenido ${username}`);
    localStorage.setItem('TOKEN', response.response.token);
    localStorage.setItem('user_id', response.response.user._id);
    localStorage.setItem('USERNAME', response.response.user.username);
    navigate('/start_project');
  } else {
    alert('El usuario o contraseña no existen');
  }

  if (response.response.user.isAdmin == 'Yes' && response.status === 200) {
    alert('Te has logado con usuario ADMIN');
    console.log('Te has logado con usuario ADMIN');
  }
};

export const registerNewWebPage = async (state) => {
  event.preventDefault();
  const userID = localStorage.getItem('user_id');

  const response = await fetchFunction({
    endpoint: 'websites',
    method: 'POST',
    body: JSON.stringify({
      favicon: state.headerImage,
      projectName: state.selectedProjectName,
      header: state.selectedHeader,
      body: state.selectedBody,
      footer: state.selectedFooter,
      createdBy: userID,
    }),
  });

  console.log(response);

  alert(
    'Selección guardada! Puedes ver todos tus proyectos creados, clicando en tu perfil y luego en "Mis Proyectos". '
  );
};
