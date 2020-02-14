import React, { useState } from 'react';
import firebase from 'firebaseConfig';
import { generatePushId } from 'helpers';
import { useProjectsValue } from 'context';
import { IoIosAdd } from 'react-icons/io';

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    if (projectName && projectName !== '') {
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: '9M6CyUPreOyC8cQgA5E3',
        })
        .then(() => {
          setProjects([]);
          setProjectName('');
          setShow(false);
        });
    }
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            className="add-project__name"
            placeholder="Name of the project"
            type="text"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
        </div>
      )}
      <button
        type="button"
        className={show ? 'add-project__submit' : 'add-project__btn'}
        onClick={() => (show ? addProject() : setShow(!show))}
      >
        <span>
          <IoIosAdd />
        </span>
        Add Project
      </button>
      {show && (
        <button type="button" className="add-project__cancel" onClick={() => setShow(false)}>
          Cancel
        </button>
      )}
    </div>
  );
};
export default AddProject;
