import axios from 'axios';

export const GET_DAILY_KCAL_INFO = "GET_DAILY_KCAL_INFO";
export const SET_LOGGED_USER_INFO = "SET_LOGGED_USER_INFO";

export const fetchDailyKcalInfo = (formInfo) => {
    return dispatch => {
        axios
            .post(`https://slimmom-backend.goit.global/daily-rate`, formInfo, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(result => {
                dispatch(getDailyKcalInfo(result))
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }
}

export const fetchLogin = (formInfo) => {
    return dispatch => {
        axios
            .post(`https://slimmom-backend.goit.global/auth/login`, formInfo, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(result => {
                dispatch(setLoggedUserInfo(result))
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }
}

export const getDailyKcalInfo = (data) => {
    return {
        type: GET_DAILY_KCAL_INFO,
        payload: data
    }
}

export const setLoggedUserInfo = (data) => {
    return {
        type: SET_LOGGED_USER_INFO,
        payload: data
    }
}