import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getCategories,
  getWebPageByID,
  handleCategoryChange,
  handleDeleteProject,
  handleProjectClick,
} from '../../function/handleFunctions';
import { context } from '../../hooks/context/context';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserProjects.scss';

const UserProjects = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(context);
  const { projects } = state;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const notify = (message) =>
    toast.success(message, {
      draggable: true,
      position: 'top-center',
      autoClose: 700,
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getWebPageByID();
        if (projectData?.response?.websites) {
          dispatch({
            type: 'SET_PROJECTS',
            payload: projectData.response.websites,
          });
        } else {
          console.log('No se encontraron proyectos.');
        }

        const categoryData = await getCategories();
        if (categoryData?.response) {
          setCategories(categoryData.response);
        } else {
          console.log('No se encontraron categorías.');
        }
      } catch (err) {
        notify(err.message);
      }
    };

    fetchData();
  }, [dispatch]);

  const filteredProjects = projects.filter((project) => {
    if (!selectedCategory) return true;

    const category = categories.find(
      (category) => category.name === selectedCategory
    );

    return category?.websites.some((web) => web._id === project._id);
  });

  return (
    <div className="user_projects">
      <h2>Mis Proyec(t)os</h2>
      <select
        name="categorias"
        id="categorias"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Selecciona una categoría</option>
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      {filteredProjects.length > 0 ? (
        <ul>
          {filteredProjects.map((project) => {
            const projectCategory = categories.find((category) =>
              category.websites.some((web) => web._id === project._id)
            );

            return (
              <li
                key={project._id}
                onClick={() => handleProjectClick(navigate, project)}
              >
                <Button
                  title={'Borrar proyecto'}
                  className={'delete_btn'}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteProject(project, projects, dispatch);
                  }}
                  text={'X'}
                />
                <span className="project_name">{project.projectName}</span>
                <select
                  name="categoria"
                  id="categoria"
                  onClick={(event) => event.stopPropagation()}
                  onChange={(e) =>
                    handleCategoryChange(
                      e,
                      project,
                      projects,
                      dispatch,
                      categories
                    )
                  }
                  value={state.populatedCategory || projectCategory?.name || ''}
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
