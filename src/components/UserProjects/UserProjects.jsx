import React, { useEffect, useState } from 'react';
import { getWebPageByID } from '../../function/handleFunctions';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './UserProjects.scss';

const UserProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getWebPageByID();
        if (data && data.response && data.response.websites) {
          setProjects(data.response.websites);
        } else {
          console.log('No se encontraron proyectos.');
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    localStorage.setItem('selectedProject', JSON.stringify(project));
    navigate('/start_project');
  };

  return (
    <div className="user_projects">
      <h2>Mis Proyectos</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project._id} onClick={() => handleProjectClick(project)}>
              {project.projectName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay proyectos disponibles.</p>
      )}
    </div>
  );
};

export default UserProjects;
