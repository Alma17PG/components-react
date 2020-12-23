import { connect } from 'react-redux';
import { setDia } from '../../redux/actions';
import PlaygroundCarlos from './PlaygroundCarlos';

const mapStateToProps = (state) =>({
  dia: state.dia,
});

const mapDispatchToProps = (dispatch) => ({
  setDia: (value) => dispatch(setDia(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundCarlos);