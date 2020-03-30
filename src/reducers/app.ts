import { combineReducers } from 'redux';
import * as Actions from '../actions';

const activeTerm = (state = '', { type, payload}: any ) => {
    switch (type) {
      case Actions.ACTIONS.SET_ACTIVE_TERM:
        return payload.term;
      case Actions.ACTIONS.CLEAR_ACTIVE_TERM:
        return '';
      default:
        return state;
    }
}

export default combineReducers({
  activeTerm
})