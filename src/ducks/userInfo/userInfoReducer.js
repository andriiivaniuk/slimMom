import { 
    GET_DAILY_KCAL_INFO,
    SET_LOGGED_USER_INFO,
    SET_LOGGED_USER_DAY_DATA,
    SET_LAST_FOOD_SEARCH_RESULT,
    CLEAN_LAST_FOOD_SEARCH_RESULT,
    EXECUTE_LOGOUT_LOCALLY,
    REGISTRATION_FAIL,
    GET_DAILY_KCAL_GUEST_FAIL
} from "./userInfoActions";

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DAILY_KCAL_INFO:
            return {
                ...state,
                lastDailyIntakeData: {
                    dailyKcal: action.payload.data.dailyRate,
                    notAllowedFoods: action.payload.data.notAllowedProducts
                }
            }

        case SET_LOGGED_USER_INFO:
            const userData = action.payload.data.user.userData;
            return {
                ...state,
                user: action.payload.data.user,
                todaySummary: action.payload.data.todaySummary,
                loginData: {
                    accessToken: action.payload.data.accessToken,
                    refreshToken: action.payload.data.refreshToken,
                    sid: action.payload.data.sid
                },
                userLogged: true,
                entryInfoExist: 
                    userData.weight === 0 &&
                    userData.dailyRate === 0 &&
                    userData.age === 0 ? 
                    false : true

            }

        case SET_LOGGED_USER_DAY_DATA:
            return {
                ...state,
                todaySummary: action.payload.data
            }
        case SET_LAST_FOOD_SEARCH_RESULT:
            return {
                ...state,
                lastFoodSearchResult: action.payload.data
            }

        case CLEAN_LAST_FOOD_SEARCH_RESULT:
            return {
                ...state,
                lastFoodSearchResult: {}
            }

        case EXECUTE_LOGOUT_LOCALLY:
            return {
                ...state,
                loginData: {},
                userLogged: false,
                todaySummary: {},
                user: {},
                entryInfoExist: false,
                lastDailyIntakeData: {}
            }

        case REGISTRATION_FAIL:
            return {
                ...state,
                loginData: {},
                userLogged: false,
                todaySummary: {},
                user: {},
                entryInfoExist: false,
                lastDailyIntakeData: {}
            }
        case GET_DAILY_KCAL_GUEST_FAIL: 
            return {
                ...state,
                lastDailyIntakeData: null
            }
        default:
            return state;
    }
}

export default userInfoReducer;