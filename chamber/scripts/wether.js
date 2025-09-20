const town = document.querySelector('#town');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');
const graphic = document.querySelector('#graphic');
const humidity = document.querySelector('#humidity');
const max_temperature = document.querySelector('#max_temperature');
const min_temperature = document.querySelector('#min_temperature');

const key = "77fbc67d1b89c23e9c1da6d5d4d68b05"
const lat = "-31.372928871531215"
const lon = "-64.21343842346488"
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

export async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
export function displayResults(data) {
    town.innerHTML =data.name;
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&deg C`;
    const iconscr = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    graphic.setAttribute('src', iconscr);
    graphic.setAttribute('alt', data.weather[0].description);
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    max_temperature.innerHTML = `High: ${data.main.temp_max}&deg C`;
    min_temperature.innerHTML = `Low: ${data.main.temp_min}&deg C`;
}

apiFetch();

