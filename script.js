'use-strict';

const input = document.querySelector('#city');
const btn = document.querySelector('.btn');
const card = document.querySelector('.card');

const renderData = function (data) {
  console.log(data);
  const {
    current: { temp_c, temp_f, is_day, humidity, vis_km, wind_kph },
  } = data;
  const html = `
  <p>Current Temperature: ${temp_c}C  ${temp_f}F</p>
  <p>Day/Night: ${is_day === 0 ? 'Night' : 'Day'}</p>
  <p>Humidity: ${humidity}</p>
  <p>Visibility: ${vis_km} km</p>
  <p>Wind Speed: ${wind_kph} kph</p>
  `;
  card.innerHTML = html;
};

const renderError = function (message) {
  card.innerHTML = `<p>${message}</p>`;
};

btn.addEventListener('click', function () {
  const city = input.value;
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=159fa0feff2e460e88f193541230311&q=${city}`
  )
    .then((res) => res.json())
    .then((data) => renderData(data))
    .catch((err) => renderError(err.message));
});
