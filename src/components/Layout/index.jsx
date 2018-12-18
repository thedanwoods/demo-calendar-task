import { connect } from 'react-redux';
import Layout from './component';
import setDate from '../../actions/setDate';

export const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
  formOpen: state.form.open,
});

export const mapDispatchToProps = dispatch => ({
  onMount: () => {
    dispatch(setDate(new Date()));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
