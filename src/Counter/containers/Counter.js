import React from 'react';
import { connect } from 'react-redux';

const Component = ({ counter }) => {
  return <div>{counter}</div>;
};

const mapStateToProps = state => ({ counter: state.counter });

export default connect(mapStateToProps)(Component);
