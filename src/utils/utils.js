export const getTodayDateString = (deviderChar) => {
    const {day, month, year} = createDateVars();

    return day + deviderChar + month + deviderChar + year;
}

export const getTodayDateObj = () => {
    const {day, month, year} = createDateVars();

    return {
        date: `${year}-${month}-${day}`
    }
}

const createDateVars = () => {
    const date = new Date(Date.now());
    const year = date.getFullYear();

    const month = (String(date.getMonth() + 1)).length < 2 ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;

    const day = (String(date.getDate())).length < 2 ? `0${date.getDate()}`
    : date.getDate();

    return {
        year: year,
        month: month,
        day: day
    }
}

export const getCookie = (cookieName) => {
    let cookie = {};

    document.cookie.split(';').forEach(item => {
        let [key, value] = item.split('=');
        cookie[key.trim()] = value;
    })

    return cookie[cookieName];
}