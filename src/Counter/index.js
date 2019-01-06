import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import IncreaseButton from './containers/IncreaseButton';
import DecreaseButton from './containers/DecreaseButton';
import CounterNumber from './containers/Counter';
import reducer from './state-management/reducers';
import Submit from './components/Submit';

const store = createStore(reducer);
const Counter = styled.div`
  min-width: 500px;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  padding: 20px;
  margin: 20px auto;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  height: 120px;
  background: #282c34;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  padding: 0;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Left = styled.div`
  height: 100px;
  color: white;
  font-size: 30px;
  flex: 2;
  font-weight: 700;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
const Center = styled.div`
  height: 100px;
  flex: 1;
  color: white;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid pink;
  border-radius: 5px;
`;
const Right = styled.div`
  width: 100%;
  flex: 2;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Component = () => {
  return (
    <Provider store={store}>
      <Counter>
        <Card>
          <Left>大人人數：</Left>
          <Center>
            <CounterNumber />
          </Center>
          <Right>
            <IncreaseButton>+</IncreaseButton>
            <DecreaseButton>-</DecreaseButton>
          </Right>
        </Card>
        <Card>
          <Left>小孩人數：</Left>
          <Center>
            <CounterNumber />
          </Center>
          <Right>
            <IncreaseButton>+</IncreaseButton>
            <DecreaseButton>-</DecreaseButton>
          </Right>
        </Card>
        <Submit>結帳</Submit>
      </Counter>
    </Provider>
  );
};

export default Component;
