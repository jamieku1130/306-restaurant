import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import IncreaseButton from './containers/IncreaseButton';
import DecreaseButton from './containers/DecreaseButton';
import CounterNumber from './containers/Counter';
import reducer from './state-management/reducers';
import Submit from './components/Submit';
import ChildIncreaseButton from './childContainers/IncreaseButton';
import ChildDecreaseButton from './childContainers/DecreaseButton';
import ChildCounterNumber from './childContainers/Counter';
import calc from './calc';

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

class CounterApp extends Component {
  state = {
    adult: 0,
    child: 0,
    adultNoFee: 0,
    childNoFee: 0,
    adultFee: 0,
    childFee: 0,
    total: 0
  };

  onSubmitHandler = (counterA, counterB) => {
    const {
      adult,
      child,
      adultNoFee,
      childNoFee,
      adultFee,
      childFee,
      total
    } = calc(counterA, counterB);
    this.setState({
      adult,
      child,
      adultNoFee,
      childNoFee,
      adultFee,
      childFee,
      total
    });
  };
  render() {
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
              <ChildCounterNumber />
            </Center>
            <Right>
              <ChildIncreaseButton>+</ChildIncreaseButton>
              <ChildDecreaseButton>-</ChildDecreaseButton>
            </Right>
          </Card>
          <Submit onClick={this.onSubmitHandler}>結帳</Submit>
        </Counter>
        <p>{`大人數量 = ${this.state.adult}`}</p>
        <p>{`小孩數量 = ${this.state.child}`}</p>
        <p>{`大人免費數量 = ${this.state.adultNoFee}`}</p>
        <p>{`小孩免費數量 = ${this.state.childNoFee}`}</p>
        <p>{`大人收費金額 = ${this.state.adultFee}`}</p>
        <p>{`小孩收費金額 = ${this.state.childFee}`}</p>
        <p>{`結帳金額 = ${this.state.total}`}</p>
      </Provider>
    );
  }
}

export default CounterApp;
