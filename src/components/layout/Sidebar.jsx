import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { useSelectedProjectValue } from 'context';
import Projects from 'components/Projects';
import AddProject from 'components/AddProject';

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);
  return (
    <aside className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li className={active === 'inbox' ? 'active' : ''}>
          <button
            type="button"
            data-testid="inbox"
            className="non-style-btn"
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span> Inbox</span>
          </button>
        </li>
        <li className={active === 'today' ? 'active' : ''}>
          <button
            type="button"
            data-testid="today"
            className="non-style-btn"
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span> Today</span>
          </button>
        </li>
        <li className={active === 'next_7' ? 'active' : ''}>
          <button
            type="button"
            data-testid="today"
            className="non-style-btn"
            onClick={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span> Next 7 days</span>
          </button>
        </li>
      </ul>
      <div className="sidebar__middle">
        <button
          type="button"
          data-testid="toggle-projects"
          className="non-style-btn"
          onClick={() => setShowProjects(!showProjects)}
        >
          <span className={`sidebar__projects-icon ${showProjects ? 'active' : ''}`}>
            <FaChevronDown />
          </span>
          <h2>Projects</h2>
        </button>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </aside>
  );
};

export default Sidebar;
