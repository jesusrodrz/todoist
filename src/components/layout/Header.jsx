import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import logo from 'images/logo.png';
import AddTask from 'components/AddTask';

const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="header__logo">
          <img src={logo} alt="todoist" />
        </div>
        <div className="header__settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              <button
                type="button"
                data-testid="dark-mode-action"
                className="settings__btn"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                <IoIosAdd />
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                type="button"
                data-testid="dark-mode-action"
                className="settings__btn"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
export default Header;
