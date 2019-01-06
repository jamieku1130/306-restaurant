import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

function createNamedWrapperReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;

    return reducerFunction(state, action);
  };
}

const rootReducer = combineReducers({
  counterA: createNamedWrapperReducer(counterReducer, 'A'),
  counterB: createNamedWrapperReducer(counterReducer, 'B')
});
// const rootReducer = combineReducers({
//   counter: counterReducer
// });

export default rootReducer;
