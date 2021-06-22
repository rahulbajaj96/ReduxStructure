import React from 'react';
import {LOADER_ON, LOADER_OFF} from '../constants/ReduxContants';
let initialState = {
  loading: false,
};
const loader = (state = initialState, actions) => {
  console.log('actions', actions);
  switch (actions.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default loader;
