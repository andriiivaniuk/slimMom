export const INIT_STORE = "INIT_STORE";

export const initStore = () => {
    return {
        type: INIT_STORE,
        payload: "test"
    }
}