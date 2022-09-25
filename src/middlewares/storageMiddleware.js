import { 
    SET_LOGGED_USER_INFO,
    EXECUTE_LOGOUT_LOCALLY,
    SET_LOGGED_USER_DAY_DATA
} from "../ducks/userInfo/userInfoActions";

export const storageMiddleware = (store) => (next) => (action) => {
    next(action);

    if (action.type === SET_LOGGED_USER_INFO || action.type === SET_LOGGED_USER_DAY_DATA) {

        const accessToken = store.getState().userInfo.loginData.accessToken;
        const refreshToken = store.getState().userInfo.loginData.refreshToken;

        document.cookie = "accessToken" + "=" + encodeURIComponent(accessToken);
        document.cookie = "refreshToken" + "=" + encodeURIComponent(refreshToken);

        sessionStorage.setItem("userInfo", JSON.stringify(store.getState().userInfo));
    }   

    if (action.type === EXECUTE_LOGOUT_LOCALLY) {
        document.cookie = "accessToken" + "=" + "";
        document.cookie = "refreshToken" + "=" + "";

        sessionStorage.clear();
    }
}

export default storageMiddleware;