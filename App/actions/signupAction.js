import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants/ReduxContants";

export const SignUpaction = (email, password,phone,cop) => {
    return async function (dispatch) {
        console.log('email', email);
        console.log('password', password);
        dispatch(Success_SignUp({ email, password,phone }))
        return Promise.resolve(true)
    }
}

const Success_SignUp = (response) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: response
    }
}

const Success_Failure = (response) => {
    return {
        type: SIGNUP_FAILURE,
        payload: response
    }
}