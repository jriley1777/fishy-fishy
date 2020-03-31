import { combineReducers } from 'redux';
import typingReducer from '../features/typeBar/activeTermSlice';

export default combineReducers({
  app: typingReducer
});