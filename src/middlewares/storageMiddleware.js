import { SET_LOGGED_USER_INFO } from "../ducks/userInfo/userInfoActions";

export const storageMiddleware = (store) => (next) => (action) => {
    next(action);

    if (action.type === SET_LOGGED_USER_INFO) {

        const accessToken = store.getState().userInfo.loginData.accessToken;
        const refreshToken = store.getState().userInfo.loginData.refreshToken;

        document.cookie = "accessToken" + "=" + encodeURIComponent(accessToken);
        document.cookie = "refreshToken" + "=" + encodeURIComponent(refreshToken);

        sessionStorage.setItem("userInfo", JSON.stringify(store.getState().userInfo));
    }   
}

export default storageMiddleware;