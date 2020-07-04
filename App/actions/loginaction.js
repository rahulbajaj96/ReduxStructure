import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/ReduxContants";

export const loginaction = (email, password) => {
    return async function (dispatch) {
        console.log('email', email);
        console.log('password', password);
        dispatch(Success_Login({ email, password }))
        return Promise.resolve(true)
    }
}

const Success_Login = (response) => {
    return {
        type:LOGIN_SUCCESS,
        payload: response
    }
}

const Success_Failure = (response) => {
    return {
        type: LOGIN_FAILURE,
        payload: response
    }
}