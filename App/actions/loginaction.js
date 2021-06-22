import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOADER_ON,
  LOADER_OFF,
} from '../constants/ReduxContants';

export const loginaction = (email, password) => {
  return async function(dispatch) {
    dispatch({type: LOADER_ON});
    console.log('email', email);
    console.log('password', password);
    setTimeout(() => {
      dispatch({type: LOADER_OFF});
    }, 5000);
    // dispatch(Success_Login({email, password}));
    return Promise.resolve(true);
  };
};

const Success_Login = response => {
  return {
    type: LOGIN_SUCCESS,
    payload: response,
  };
};

const Success_Failure = response => {
  return {
    type: LOGIN_FAILURE,
    payload: response,
  };
};
