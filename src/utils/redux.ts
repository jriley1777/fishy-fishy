import { Store, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/index";

const configureStore = (
  initialState?: any
): Store<any> => {
  const store = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools()
  );

  return store;
};

export default configureStore;
