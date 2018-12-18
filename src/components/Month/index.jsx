import { connect } from 'react-redux';
import Month from './component';
import setDate from '../../actions/setDate';

export const mapStateToProps = state => ({ reminders: state.reminders });

export const mapDispatchToProps = dispatch => ({
  onChangeMonth: date => {
    dispatch(setDate(date));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Month);
