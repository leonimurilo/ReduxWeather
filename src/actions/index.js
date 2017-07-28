import Axios from "axios"  // used to do ajax

const API_KEY = "e5fc331088590e8758cdbc64e5847621";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},br`;
    const requestPromise = Axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: requestPromise
    }
}
