// src/store/balance/reducer.js
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "balance/withdraw": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

// As a convention, you'll almost always find a switch statement in reducers.
// This is because our actions will always have an action.type and we want to do different things based on that type.

// We need a default case in our switch statement because we don't want to update the state
// if an action is dispatched with a type that we do not recognise.
