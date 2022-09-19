import { combineReducers } from "redux";

import initStoreReducer from "./initialStore/initialReducer";

const reducers = combineReducers({
    init: initStoreReducer
});

export default reducers;