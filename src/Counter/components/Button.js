import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  border: none;
  outline: none;
  width: 100%;

  border: 5px solid pink;
  font-size: 30px;
  padding: 0;
  margin: 10px;
  flex: 1;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
  :hover {
    border: black;
    background: pink;
  }
`;

const Component = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Component;
