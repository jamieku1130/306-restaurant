import * as ActionTypes from './actionTypes';

export const increaseCount = () => {
  return {
    type: ActionTypes.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: ActionTypes.DECREASE_COUNT
  };
};
