/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from 'context';
import Project from 'components/Project';

const Projects = ({ activeValue = true }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map(project => (
      <Project
        key={project.projectId}
        project={project}
        active={active}
        clickHandler={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      />
    ))
  );
};

export default Projects;
