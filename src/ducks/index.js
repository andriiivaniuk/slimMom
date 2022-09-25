import { combineReducers } from "redux";

import { initStoreReducer } from "./initialStore";
import { userInfoReducer } from "./userInfo";

const reducers = combineReducers({
    init: initStoreReducer,
    userInfo: userInfoReducer
});

export default reducers;