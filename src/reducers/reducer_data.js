import {
  INCREMENT_STEP
} from '../actions/index';

const initialState = {
  step: 1
};

export default function (state = initialState, action) {
  switch(action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    default:
      return state;
  }
}
