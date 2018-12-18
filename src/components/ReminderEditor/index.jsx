import { connect } from 'react-redux';
import ReminderEditor from './component';
import { formSubmitted, formClosed, itemDeleted } from '../../actions/form';

export const mapStateToProps = state => ({
  form: state.form,
});

export const mapDispatchToProps = dispatch => ({
  formSubmitted: form => {
    dispatch(formSubmitted(form));
  },
  formClosed: () => {
    dispatch(formClosed());
  },
  itemDeleted: id => {
    dispatch(itemDeleted(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReminderEditor);
