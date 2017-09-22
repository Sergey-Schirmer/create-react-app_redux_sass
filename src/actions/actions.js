import {ACTION} from './actionsConst';



export const appAction = (text) => {
  return {type: ACTION, text};
};