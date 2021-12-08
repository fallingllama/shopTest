import { SET_CATALOG } from './actions';

const initialState = {};

function rootReducer(state = initialState, action = () => {}) {
  switch (action.type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: { ...action.payload },
      };

    default:
      return state;
  }
}

export default rootReducer;
