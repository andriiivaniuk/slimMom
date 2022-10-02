import axios from 'axios';
import { getTodayDateObj } from '../../utils/utils';

export const GET_DAILY_KCAL_INFO = "GET_DAILY_KCAL_INFO";
export const SET_LOGGED_USER_INFO = "SET_LOGGED_USER_INFO";
export const SET_LOGGED_USER_DAY_DATA = "SET_LOGGED_USER_DAY_DATA";
export const SET_LAST_FOOD_SEARCH_RESULT = "SET_LAST_FOOD_SEARCH_RESULT";
export const CLEAN_LAST_FOOD_SEARCH_RESULT = "CLEAN_LAST_FOOD_SEARCH_RESULT";
export const EXECUTE_LOGOUT_LOCALLY = "EXECUTE_LOGOUT_LOCALLY";
export const REGISTRATION_FAIL = "REGISTRATION_FAIL";
export const GET_DAILY_KCAL_GUEST_FAIL = "GET_DAILY_KCAL_GUEST_FAIL";

export const fetchDailyKcalInfo = (formInfo) => {
    return dispatch => {
        axios
            .post(`https://slimmom-backend.goit.global/daily-rate`, formInfo, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    
                }
            })
            .then(result => {
                dispatch(getDailyKcalInfo(result))
            })
            .catch(error => {
                alert(error.response.data.message);
                dispatch(getDailyKcalGuestFail());
            })
    }
}

export const getDailyKcalGuestFail = () => {
    return {
        type: GET_DAILY_KCAL_GUEST_FAIL
    }
}

export const fetchUserDailyKcalInfo = (formInfo, userId, token) => {
    return dispatch => {
        axios
            .post(`https://slimmom-backend.goit.global/daily-rate/${userId}`, formInfo, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(result => {
                console.log(result);
                dispatch(fetchLoggedUserDayInfo(getTodayDateObj(), token));
                dispatch(getDailyKcalInfo(result));
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

export const setLastFoodSearchResult = (data) => {
    return {
        type: SET_LAST_FOOD_SEARCH_RESULT,
        payload: data
    }
}

export const cleanLastFoodSearchResult = () => {
    return {
        type: CLEAN_LAST_FOOD_SEARCH_RESULT
    }
}

export const signalRegistrationError = () => {
    return {
        type: REGISTRATION_FAIL
    }
}

export const fetchLoggedUserDayInfo = (date, token) => {
    return dispatch => {
        axios
        .post(
            `https://slimmom-backend.goit.global/day/info`, date,  {
                headers: {
                    'Access-Control-Allow-Origin' : '*',
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

export const fetchSearchedFood = (foodName, token) => {
    return dispatch => {
        axios
        .get(`https://slimmom-backend.goit.global/product?search=${foodName}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                "Authorization": token
            }
        })
        .then(result => {
            dispatch(setLastFoodSearchResult(result))
        })
        .catch(error => {
            dispatch(cleanLastFoodSearchResult());
            alert(error.response.data.message);
        })
    }
}

export const sendEatenFoodToServer = (foodInfo, token) => {
    return dispatch => {
        axios
        .post(`https://slimmom-backend.goit.global/day`, foodInfo, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Authorization": token
            }
        })
        .then(result => {
            console.log(result);
            dispatch(fetchLoggedUserDayInfo(getTodayDateObj(), token));
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }
}

export const deleteFoodFromServer = (foodInfo, token) => {

    return dispatch => {
        axios
        .delete(`https://slimmom-backend.goit.global/day`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': token,
            },
            data: foodInfo
        })
        .then(result => {
            console.log(result);
            dispatch(fetchLoggedUserDayInfo(getTodayDateObj(), token));
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }
}

export const executeLogoutLocally = () => {
    return {
        type: EXECUTE_LOGOUT_LOCALLY
    }
}

export const fetchLogout = (token) => {
    return dispatch => {
        axios
        .post(`https://slimmom-backend.goit.global/auth/logout/`, {}, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            dispatch(executeLogoutLocally());
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }
}

export const fetchRegisterUser = (formInfo) => {
    return dispatch => {
        axios
        .post(`https://slimmom-backend.goit.global/auth/register/`, formInfo, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log(result);
            dispatch(fetchLogin({
                email: formInfo.email,
                password: formInfo.password
            }));
        })
        .catch(error => {
            alert(error.response.data.message);
            dispatch(signalRegistrationError());
        })
    }
}
