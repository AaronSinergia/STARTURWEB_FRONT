import { fetchFunction } from './fetchFunction';

export const registerUser = async (navigate) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
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
    localStorage.setItem('user_id', response.response._id);
    localStorage.setItem('USERNAME', response.response.username);

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

  if (response.status === 200) {
    alert(`Bienvenido ${username}`);
    localStorage.setItem('TOKEN', response.response.token);
    localStorage.setItem('user_id', response.response.user._id);
    localStorage.setItem('USERNAME', response.response.user.username);
    navigate('/start_project');
  } else {
    alert('El usuario o contraseña no existen');
  }
};

export const registerNewWebPage = async (state) => {
  event.preventDefault();
  const userID = localStorage.getItem('user_id');

  const response = await fetchFunction({
    endpoint: 'websites',
    method: 'POST',
    body: JSON.stringify({
      img: state.headerImage,
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

export const getWebPageByID = async () => {
  const userID = localStorage.getItem('user_id');

  const response = await fetchFunction({
    endpoint: `websites/${userID}`,
    method: 'GET',
  });

  return response;
};

export const getCategories = async () => {
  const response = await fetchFunction({
    endpoint: `categories/`,
    method: 'GET',
  });

  return response;
};

export const populateCategories = async (categoryName, projectID) => {
  const response = await fetchFunction({
    endpoint: `categories/populateWebsite/${categoryName}`,
    method: 'PUT',
    body: JSON.stringify({
      websites: projectID,
    }),
  });

  console.log(response);

  return response;
};

export const handleProjectClick = (navigate, project) => {
  localStorage.setItem('selectedProject', JSON.stringify(project));
  navigate('/start_project');
};

export const handleH1Click = (state, navigate) => {
  state.setHeader === 'Volver a Home' && !localStorage.getItem('user_id')
    ? navigate('/')
    : null;
};

export const getReturnRoute = () => {
  return localStorage.getItem('user_id') ? '/start_project' : '/login';
};

export const handleReset = (dispatch) => {
  dispatch({ type: 'RESET' });
  localStorage.removeItem('selectedProject');
};
