const town1 = document.querySelector('#town1');
const description1 = document.querySelector('#description1');
const temperature1 = document.querySelector('#temperature1');
const graphic1 = document.querySelector('#graphic1');
const humidity1 = document.querySelector('#humidity1');
const max_temperature1 = document.querySelector('#max_temperature1');
const min_temperature1 = document.querySelector('#min_temperature1');

const key1 = "77fbc67d1b89c23e9c1da6d5d4d68b05";
const lat1 = "-31.372928871531215";
const lon1 = "-64.21343842346488";
const cnt = 3;

const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&cnt=${cnt}&appid=${key1}&units=metric`;

export async function apiFetch() {
  try {
    const response = await fetch(url1);
    if (response.ok) {
      const data = await response.json();
      console.log("Datos recibidos:", data); 
      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Error en apiFetch:", error);
  }
}

export function displayResults(data) {
  const today = data.list[0];

  town1.textContent = data.city.name;
  description1.textContent = today.weather[0].description;
  temperature1.innerHTML = `${today.main.temp}&deg; C`;

  const iconSrc = `https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`;
  graphic1.setAttribute('src', iconSrc);
  graphic1.setAttribute('alt', today.weather[0].description);

  humidity1.textContent = `Humidity: ${today.main.humidity}%`;
  max_temperature1.innerHTML = `High: ${today.main.temp_max}&deg; C`;
  min_temperature1.innerHTML = `Low: ${today.main.temp_min}&deg; C`;
}

apiFetch();
