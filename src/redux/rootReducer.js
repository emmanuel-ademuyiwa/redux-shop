import { combineReducers } from "redux";
// import cartReducer from "./reducers/cart";
import shopReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
    shop:shopReducer
})

export default rootReducer;