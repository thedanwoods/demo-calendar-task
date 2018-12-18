/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { GithubPicker } from 'react-color';
import Flatpickr from 'react-flatpickr';

import './reminder-editor.scss';
import 'flatpickr/dist/themes/light.css';

const modalStyles = {
  content: {
    bottom: 'auto',
    padding: '24px',
    position: 'fixed',
    left: '50%',
    top: '20%',
    right: 'auto',
    transform: 'translate(-50%,-20%)',
    width: '80%',
    maxWidth: '30rem',
  },
};

const ReminderEditor = ({ form, formSubmitted, formClosed, itemDeleted }) => {
  const [reminderDate, setReminderDate] = useState(null);
  const [colorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
  const [reminder, setReminder] = useState('');
  // If it's new, we get a form.time and form.color(?!)
  useEffect(() => {
    setReminderDate(form.time);
    setColor(form.color);
    setReminder(form.reminder || '');
  }, []);
  return (
    <Modal isOpen style={modalStyles} contentLabel="Example Modal">
      <div className="reminder-editor">
        <div>
          <button
            type="button"
            onClick={formClosed}
            className="reminder-editor__close"
          >
            &times;
          </button>
        </div>
        <h2 className="reminder-editor__heading">Reminder</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            formSubmitted({
              reminderDate,
              reminder,
              color,
              id: form.id || null,
            });
          }}
        >
          <div>
            <input
              autoFocus
              placeholder="e.g. Feed the cat"
              className="reminder-editor__input"
              value={reminder}
              onChange={e => setReminder(e.target.value)}
              required
              maxLength="30"
            />
          </div>
          <div>
            <Flatpickr
              className="reminder-editor__input"
              options={{
                dateFormat: 'H:i l j F Y',
                defaultDate: new Date(reminderDate),
                enableTime: true,
                time_24hr: true,
                onClose: d => {
                  setReminderDate(d[0].toUTCString());
                },
              }}
            />
          </div>
          <div>
            <button
              className="reminder-editor__button reminder-editor__color-button"
              style={{ color: `rgb(${color.r},${color.g},${color.b})` }}
              type="button"
              onClick={() => setColorPicker(true)}
            >
              Colour
            </button>
          </div>
          {colorPicker && (
            <div>
              <GithubPicker
                width="112px"
                onChangeComplete={selectedColor => {
                  setColor(selectedColor.rgb);
                  setColorPicker(false);
                }}
              />
            </div>
          )}

          <div>
            <button className="reminder-editor__button" type="submit">
              Submit
            </button>
            {form.id && (
              <button
                className="reminder-editor__button"
                type="button"
                onClick={() => itemDeleted(form.id)}
              >
                Delete
              </button>
            )}
            <button
              className="reminder-editor__button"
              type="button"
              onClick={formClosed}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

ReminderEditor.propTypes = {
  form: PropTypes.object.isRequired,
  formSubmitted: PropTypes.func.isRequired,
  formClosed: PropTypes.func.isRequired,
  itemDeleted: PropTypes.func.isRequired,
};

export default ReminderEditor;
