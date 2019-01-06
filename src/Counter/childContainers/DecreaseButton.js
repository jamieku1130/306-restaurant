import { connect } from 'react-redux';
import Button from '../components/Button';
import { decreaseCount } from '../state-management/actionCreators';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(decreaseCount('B'))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
