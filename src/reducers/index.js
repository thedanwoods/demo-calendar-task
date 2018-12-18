import { combineReducers } from 'redux';
import selectedDate from './selectedDateReducer';
import form from './formReducer';
import reminders from './remindersReducer';

export default combineReducers({
  selectedDate,
  form,
  reminders,
});
