import { INIT_STORE } from "./initialActions";

const initStoreReducer = (state = {}, action) => {
    switch (action.type) {
        case INIT_STORE: 
            return {
                INIT_STORE: INIT_STORE
            }
        default:
            return state;
    }
}

export default initStoreReducer;