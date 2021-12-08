import { SOMETHING } from './actions';

const initialState = {};

function rootReducer(state = initialState, action = () => {}) {
  switch (action.type) {
    case SOMETHING:
      return {
        ...state,
        something: { ...action.something },
      };

    default:
      return state;
  }
}

export default rootReducer;
