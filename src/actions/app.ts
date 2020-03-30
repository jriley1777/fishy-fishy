import * as Actions from './index';

export const setActiveTerm = (term: string) => {
    return {
        type: Actions.ACTIONS.SET_ACTIVE_TERM,
        payload: {
            term
        }
    }
}

export const clearActiveTerm = () => {
  return {
    type: Actions.ACTIONS.CLEAR_ACTIVE_TERM
  };
};