import { connect } from 'react-redux';
import { setTicket } from '../../redux/actions';
import PlaygroundRicardo from './PlaygroundRicardo';

const mapStateToProps = (state) =>({
    ticket: state.ticket,
});

const mapDispatchToProps = (dispatch) => ({
  setTicket: (value) => dispatch(setTicket(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundRicardo);
