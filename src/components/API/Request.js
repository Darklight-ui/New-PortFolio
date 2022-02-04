// API Key
const API_KEY = "8c601e833a34ed6fe0dea38ac5a24247";

const MOVIES_KEY = "ae725f2efa66e6fb7205628ad34c2f49"
const MOVIE_ID= 5


// City Names
const requests = {
    london: `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`,
    abuja: `https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=${API_KEY}`,
    lagos: `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${API_KEY}`,
    marvel: `https://api.themoviedb.org/3/list/${MOVIE_ID}?api_key=${MOVIES_KEY}&language=en-US`
}


export default requests