import axios from 'axios';

export const GET_DAILY_KCAL_INFO = "GET_DAILY_KCAL_INFO";
export const SET_LOGGED_USER_INFO = "SET_LOGGED_USER_INFO";
export const SET_LOGGED_USER_DAY_DATA = "SET_LOGGED_USER_DAY_DATA";

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

export const setLoggedUserDayInfo = (data) => {
    return {
        type: SET_LOGGED_USER_DAY_DATA,
        payload: data
    }
}

export const fetchLoggedUserDayInfo = (date, token) => {
    return dispatch => {
        axios
        .post(
            `https://slimmom-backend.goit.global/day/info`, date,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
        )
        .then(result => {
            dispatch(setLoggedUserDayInfo(result))
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }
    
}
