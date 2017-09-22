import {ACTION}from '../actions/actionsConst'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ACTION:
      return state.concat({
        text: action.text
      });
    default:
      return state
  }
};
export default reducer;