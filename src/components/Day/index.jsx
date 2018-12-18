import { connect } from 'react-redux';
import { isSameDay } from 'date-fns';
import Day from './component';
import { createReminder, editItem } from '../../actions/form';

const byDateAscending = (a, b) =>
  new Date(a.reminderDate) - new Date(b.reminderDate);

export const mapStateToProps = (state, ownProps) => {
  return {
    reminders: state.reminders
      .filter(reminder =>
        isSameDay(new Date(reminder.reminderDate), ownProps.day.time),
      )
      .sort(byDateAscending),
  };
};

export const mapDispatchToProps = dispatch => ({
  addReminder: time => {
    dispatch(createReminder(time));
  },
  editItem: id => {
    dispatch(editItem(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
