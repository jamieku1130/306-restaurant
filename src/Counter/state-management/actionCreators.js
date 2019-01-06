import * as ActionTypes from './actionTypes';

export const increaseCount = name => {
  return {
    name,
    type: ActionTypes.INCREASE_COUNT
  };
};

export const decreaseCount = name => {
  return {
    name,
    type: ActionTypes.DECREASE_COUNT
  };
};
