import { createStore } from "redux";

const initialState = {
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
      };

    case "minus":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

export const store = createStore(reducer, initialState);

// {...oldState, ...newState} => {...{counter: 0}, ...{counter: 2}} => отримуємо {counter: 0, counter: 2} => {counter: 2}