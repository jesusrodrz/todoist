/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from 'context';
import firebase from 'firebaseConfig';

const Project = ({ project, active, clickHandler }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = async docId => {
    await firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete();
    setProjects([...projects]);
    setSelectedProject('INBOX');
  };

  return (
    <li
      data-doc-id={project.docId}
      data-testid="project-action"
      className={active === project.projectId ? 'active sidebar__project' : 'sidebar__project'}
      onClick={clickHandler}
      onMouseLeave={() => setShowConfirm(false)}
    >
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <button
        type="button"
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={e => {
          setShowConfirm(!showConfirm);
          e.stopPropagation();
        }}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button type="button" onClick={() => deleteProject(project.docId)}>
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={() => setShowConfirm(!showConfirm)}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </button>
    </li>
  );
};
export default Project;
