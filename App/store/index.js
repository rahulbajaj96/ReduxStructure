import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AllReducers from "../reducers.js/AllReducers";
const store = createStore(AllReducers, applyMiddleware(thunk));
export default store;
