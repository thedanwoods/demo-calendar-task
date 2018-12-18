import initialState from './initialState';

const remindersReducer = (state = initialState.reminders, action = {}) => {
  switch (action.type) {
    case 'FORM_SUBMITTED': {
      return [
        ...state.filter(reminder => reminder.id !== action.form.id),
        {
          ...action.form,
        },
      ];
    }
    case 'ITEM_DELETED': {
      return [
        ...state.filter(reminder => reminder.id !== action.id)
      ]
    }
    default:
      return state;
  }
};

export default remindersReducer;
