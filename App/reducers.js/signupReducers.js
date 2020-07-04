import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants/ReduxContants";

let initialState = {
    SignUpresponse: ''
}

export const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS: return {
            ...state,
            SignUpresponse: action.payload
        };
        case SIGNUP_FAILURE: return {
            ...state,
            SignUpresponse: null
        }
        default: return state;
    }
}