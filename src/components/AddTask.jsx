import React, { useState, useEffect, useRef } from 'react';
import { FaRegListAlt, FaRegCalendarAlt, FaTimes } from 'react-icons/fa';
import moment from 'moment';
import firebase from 'firebaseConfig';
import { useSelectedProjectValue } from 'context';
import ProjectOverlay from 'components/ProjectOverlay';
import TaskDate from 'components/TaskDate';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

const AddTask = ({
  showAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    console.log(projectId);
    let collatedDate = '';

    switch (projectId) {
      case 'TODAY':
        collatedDate = moment().format('DD/MM/YYYY');

        break;
      case 'NEXT_7':
        collatedDate = moment()
          .add(7, 'days')
          .format('DD/MM/YYYY');
        break;
      default:
        break;
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: '9M6CyUPreOyC8cQgA5E3',
        })
        .then(response => {
          console.log(response);
          setTask('');
        })
    );
  };

  const taskNameInput = useRef();

  useEffect(() => {
    if (showMain || showQuickAddTask) {
      taskNameInput.current.focus();
    }
  }, [showMain, showQuickAddTask]);

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && !(showMain || showQuickAddTask) && (
        <button
          type="button"
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => {
            setShowMain(!showMain);
          }}
        >
          <span>
            <IoIosAdd />
          </span>
          Add task
        </button>
      )}
      {(showMain || showQuickAddTask) && (
        <div data-testid="add-task-main" className="add-task__main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task" className="add-task__quick">
                <h2 className="header-add-task">Quick Add Task</h2>
                <button
                  type="button"
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                >
                  <IoIosClose />
                </button>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            type="text"
            ref={taskNameInput}
            className="add-task__content"
            data-testid="add-task-content"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <div className="add-task__actions">
            <button
              type="button"
              className="add-task__submit"
              data-testid="add-task"
              onClick={() => {
                addTask();
                setShowMain(false);
                setShowProjectOverlay(false);
                if (showQuickAddTask) {
                  setShowQuickAddTask(false);
                }
              }}
            >
              Add Task
            </button>
            {!showQuickAddTask && (
              <button
                type="button"
                className="add-task__cancel"
                data-testid="add-task-main-cancel"
                onClick={() => {
                  setShowMain(false);
                  setShowProjectOverlay(false);
                }}
              >
                Cancel
              </button>
            )}
            <div />
            <div className="add-task__actions-right">
              <button
                type="button"
                className="add-task__action"
                data-testid="show-task-date-overlay"
                onClick={() => setShowProjectOverlay(!showProjectOverlay)}
              >
                <FaRegListAlt />
              </button>
              <button
                type="button"
                className="add-task__action"
                data-testid="show-task-date-overlay"
                onClick={() => setShowTaskDate(!showTaskDate)}
              >
                <FaRegCalendarAlt />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
