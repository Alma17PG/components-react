import { connect } from 'react-redux';
import { setUser } from '../../redux/actions';
import PlaygroundAlma from './PlaygroundAlma';

const mapStateToProps = (state) =>({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (value) => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundAlma);
