import cartReducer from "./cart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    cart : cartReducer,
})

export default rootReducers;