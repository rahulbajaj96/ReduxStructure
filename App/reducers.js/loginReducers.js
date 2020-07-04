import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/ReduxContants";

let initialState = {
    loginresponse: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return {
            ...state,
            loginresponse: action.payload
        };
        case LOGIN_FAILURE: return {
            ...state,
            loginresponse: null
        }
        default: return state;
    }
}