import React, { useEffect, useState } from 'react';
import {
  getCategories,
  getWebPageByID,
  handleProjectClick,
  populateCategories,
} from '../../function/handleFunctions';
import { useNavigate } from 'react-router-dom';
import './UserProjects.scss';

const UserProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getWebPageByID();
        if (
          projectData &&
          projectData.response &&
          projectData.response.websites
        ) {
          setProjects(projectData.response.websites);
        } else {
          console.log('No se encontraron proyectos.');
        }

        const categoryData = await getCategories();
        if (categoryData && categoryData.response) {
          setCategories(categoryData.response);
        } else {
          console.log('No se encontraron categorías.');
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (e, project) => {
    const selectedCategoryName = e.target.value;

    localStorage.setItem(
      `selectedCategoryName_${project._id}`,
      selectedCategoryName
    );

    setProjects((prevProjects) =>
      prevProjects.map((p) => {
        if (p._id === project._id) {
          return { ...p, selectedCategoryName };
        }
        return p;
      })
    );

    const selectedCategoryId = categories.find(
      (category) => category.name === selectedCategoryName
    )._id;

    populateCategories(selectedCategoryId, project._id);
  };

  return (
    <div className="user_projects">
      <h2>Mis Proyec(t)os</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => {
            const savedCategoryName =
              localStorage.getItem(`selectedCategoryName_${project._id}`) || '';
            return (
              <li
                key={project._id}
                onClick={() => handleProjectClick(navigate, project)}
              >
                <span className="project_name">{project.projectName}</span>
                <select
                  name="categoria"
                  id="categoria"
                  onClick={(event) => event.stopPropagation()}
                  onChange={(e) => handleCategoryChange(e, project)}
                  value={savedCategoryName}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="no_projects_available">No hay proyectos disponibles.</p>
      )}
    </div>
  );
};

export default UserProjects;
