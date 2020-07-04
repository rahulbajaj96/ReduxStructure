import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { SignUpReducer } from "./signupReducers";


const AllReducers = combineReducers({
    loginReducer,
    SignUpReducer

})

export default AllReducers;