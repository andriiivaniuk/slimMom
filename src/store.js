import {legacy_createStore, applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";

import thunk from "redux-thunk"

import { getCookie } from "./utils/utils";

import reducers from "./ducks";

import storageMiddleware from "./middlewares/storageMiddleware";

const tryToGetStoreFromStorage = () => {
    const userInfo = sessionStorage.getItem('userInfo');
    let accessToken;
    let refreshToken;

    if (document.cookie.length !== 0) {
        accessToken = getCookie('accessToken');
        refreshToken = getCookie('refreshToken');
    }

    if (userInfo) {
        return JSON.parse(userInfo);
    }
    else {
        return {
            userLogged: false,
            lastFoodSearchResult: {},
            entryInfoExist: false
        }
    }
}

const getInitialStore = () => {
    return {
        init: {},
        userInfo: tryToGetStoreFromStorage()
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(thunk, storageMiddleware))
);

export default store;