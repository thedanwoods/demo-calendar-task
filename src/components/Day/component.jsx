import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './day.scss';

const Day = ({ addReminder, editItem, day, reminders }) =>
  day.day === 'EMPTY' ? (
    <div className="day day--empty" />
  ) : (
    <div
      role="button"
      onClick={() => addReminder(day.time)}
      className="day day__button"
    >
      {day.day}
      {reminders.length ? (
        <ul className="day__reminders">
          {reminders.map(reminder => (
            <li key={reminder.id}>
              <div
                className="day__reminder-item"
                role="button"
                style={{
                  color: `rgb(${reminder.color.r},${
                    reminder.color.g
                  },${reminder.color.b})`,
                }}
                onClick={e => {
                  editItem(reminder);
                  e.stopPropagation();
                }}
              >
                {format(reminder.reminderDate, 'HH:mm')} {reminder.reminder}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );

Day.propTypes = {
  addReminder: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
};

export default Day;
