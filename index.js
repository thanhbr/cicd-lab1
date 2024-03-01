const axios = require('axios');

async function getWeather() {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=1e2ce9fb6026daa175e3603f8441ee0a');
  console.log(response.data);
}

getWeather();