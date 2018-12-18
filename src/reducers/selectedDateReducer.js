import initialState from './initialState';

const selectedDateReducer = (state = initialState.selectedDate, action = {}) => {
  switch (action.type) {
    case 'DATE_SELECTED':
      return action.date.toUTCString();
    default:
      return state;
  }
};

export default selectedDateReducer;
