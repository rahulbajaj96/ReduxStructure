import {combineReducers} from 'redux';
import {loginReducer} from './loginReducers';
import {SignUpReducer} from './signupReducers';
import loader from './loader';

const AllReducers = combineReducers({
  loginReducer,
  SignUpReducer,
  loader,
});

export default AllReducers;
