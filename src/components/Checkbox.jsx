/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import firebase from 'firebase';

const Checkbox = ({ id }) => {
  const archivedTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="checkbox-holder" data-testid="checkbox-action" onClick={archivedTask}>
      <span className="checkbox" />
    </div>
  );
};
export default Checkbox;
