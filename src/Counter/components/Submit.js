import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 20rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  letter-spacing: 20px;
  padding-left: 1rem;
  transition: all 0.5s ease;
  font-weight: 700;
  :hover {
    background: white;
    color: #282c34;
  }
`;

const Submit = ({ onClick, counterA, counterB, children }) => {
  return (
    <Button onClick={() => onClick(counterA, counterB)}>{children}</Button>
  );
};

const mapStateToProps = state => ({
  counterA: state.counterA,
  counterB: state.counterB
});

export default connect(mapStateToProps)(Submit);
