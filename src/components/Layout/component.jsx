import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Month from '../Month';
import ReminderEditor from '../ReminderEditor';

import './layout.scss';

Modal.setAppElement('#root'); // TODO is this right?

const Layout = ({ selectedDate, onMount, formOpen }) => {
  useEffect(() => {
    // Initially set date to today
    onMount();
  }, []);
  return (
    <div className="layout">
      {selectedDate && <Month time={new Date(selectedDate)} />}
      {formOpen && <ReminderEditor />}
    </div>
  );
};

Layout.propTypes = {
  onMount: PropTypes.func.isRequired,
};

export default Layout;
