import { 
    GET_DAILY_KCAL_INFO,
    SET_LOGGED_USER_INFO,
    SET_LOGGED_USER_DAY_DATA,
    SET_LAST_FOOD_SEARCH_RESULT,
    CLEAN_LAST_FOOD_SEARCH_RESULT,
    EXECUTE_LOGOUT_LOCALLY
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
            return {
                ...state,
                user: action.payload.data.user,
                todaySummary: action.payload.data.todaySummary,
                loginData: {
                    accessToken: action.payload.data.accessToken,
                    refreshToken: action.payload.data.refreshToken,
                    sid: action.payload.data.sid
                },
                userLogged: true
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
                user: {}
            }

        default:
            return state;
    }
}

export default userInfoReducer;