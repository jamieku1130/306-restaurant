import * as ActionTypes from '../actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return state + 1;
    case ActionTypes.DECREASE_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
