import React, { Component } from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 3;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

class Clock extends Component {
  state = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  tick = () => {
    this.setState({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    });
  };

  render() {
    return (
      <StyledClock>
        <p style={{ margin: '0', marginRight: '32px' }}>{this.state.date}</p>
        <p style={{ margin: '0' }}>{this.state.time}</p>
      </StyledClock>
    );
  }
}

export default Clock;
