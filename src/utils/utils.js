export const getTodayDateString = (deviderChar) => {
    const date = new Date(Date.now());

    const month = (String(date.getMonth() + 1)).length < 2 ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;

    const day = (String(date.getDate())).length < 2 ? `0${date.getDate()}`
    : date.getDate();

    return day + deviderChar + month + deviderChar + date.getFullYear();
}

export const getTodayDateObj = () => {
    const date = new Date(Date.now());

    const month = (String(date.getMonth() + 1)).length < 2 ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;

    const day = (String(date.getDate())).length < 2 ? `0${date.getDate()}`
    : date.getDate();

    return {
        date: `${date.getFullYear()}-${month}-${day}`
    }
}