import { 
    GET_DAILY_KCAL_INFO,
    SET_LOGGED_USER_INFO
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
        default: 
            return state;
    }
}

export default userInfoReducer;