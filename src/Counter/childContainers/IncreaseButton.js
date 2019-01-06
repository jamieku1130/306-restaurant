import { connect } from 'react-redux';
import Button from '../components/Button';
import { increaseCount } from '../state-management/actionCreators';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increaseCount('B'))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
