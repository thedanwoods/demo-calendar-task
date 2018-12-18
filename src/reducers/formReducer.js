import initialState from './initialState';

const formReducer = (state = initialState.form, action = {}) => {
  switch (action.type) {
    case 'FORM_OPENED':
      return {
        ...state,
        open: true,
        time: action.time || '',
        id: '',
      };
    case 'FORM_CLOSED':
    case 'ITEM_DELETED':
    case 'FORM_SUBMITTED':
      return {
        ...initialState.form,
      };
    case 'ITEM_EDITED':
      return {
        open: true,
        time: action.reminder.reminderDate,
        id: action.reminder.id,
        color: action.reminder.color,
        reminder: action.reminder.reminder,
      };
    default:
      return state;
  }
};

export default formReducer;
