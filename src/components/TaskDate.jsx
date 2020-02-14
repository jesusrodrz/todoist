import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li className="task-date__list-item">
            <button
              type="button"
              data-testid="task-date-today"
              className="task-date__list-btn"
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }}
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </button>
          </li>
          <li className="task-date__list-item">
            <button
              type="button"
              className="task-date__list-btn"
              data-testid="task-date-tomorrow"
              onClick={() => {
                console.log('click');
                setShowTaskDate(false);
                setTaskDate(
                  moment()
                    .add(1, 'day')
                    .format('DD/MM/YYYY'),
                );
              }}
            >
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </button>
          </li>
          <li className="task-date__list-item">
            <button
              type="button"
              data-testid="task-date-next_week"
              className="task-date__list-btn"
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(
                  moment()
                    .add(7, 'days')
                    .format('DD/MM/YYYY'),
                );
              }}
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week</span>
            </button>
          </li>
        </ul>
      </div>
    )
  );
};
export default TaskDate;
