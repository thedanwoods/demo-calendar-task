import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { IconContext } from 'react-icons';

import {
  startOfMonth,
  endOfMonth,
  getDay,
  getDate,
  format,
  subMonths,
  addMonths,
  setDate,
} from 'date-fns';
import Day from '../Day';

import './month.scss';

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wedensday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Month = ({ onChangeMonth, time }) => {
  const first = startOfMonth(time);
  const last = endOfMonth(time);
  const paddedDays = [
    ...Array.from(new Array(getDay(first))),
    ...Array.from(new Array(getDate(last)).keys()).map(el => el + 1),
    ...Array.from(new Array(6 - getDay(last))),
  ].map((day, index) => ({
    id: index,
    day: day === undefined ? 'EMPTY' : `${day}`,
    time: setDate(time, day),
  }));

  return (
    <div className="month">
      <IconContext.Provider value={{ size: '3em' }}>
        <div className="month__button-container">
          <button
            className="month__button"
            type="button"
            onClick={() => onChangeMonth(subMonths(time, 1))}
          >
            <MdArrowBack />
          </button>
        </div>
        <div className="month__month-name">
          <h1>{format(time, 'MMMM YYYY')}</h1>
        </div>
        <div className="month__button-container">
          <button
            className="month__button"
            type="button"
            onClick={() => onChangeMonth(addMonths(time, 1))}
          >
            <MdArrowForward />
          </button>
        </div>
        {dayNames.map(day => (
          <div className="month__day-name" key={day}>
            {day}
          </div>
        ))}
        {paddedDays.map(el => (
          <Day day={el} key={el.id} />
        ))}
      </IconContext.Provider>
    </div>
  );
};

Month.propTypes = {
  onChangeMonth: PropTypes.func.isRequired,
  time: PropTypes.object.isRequired,
};

export default Month;
