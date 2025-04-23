import { useState } from "react";
import "./Form.css";

export default function CityForm({ setFetched, setWeatherData }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    if (!city.trim()) {
      alert("Please enter a city.");
      return;
    }

    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          alert(`Error: ${data.error.message}`);
        } else {
          setFetched(true);
          setWeatherData(data);
        }
      })
      .catch((err) => renderError(err.message));
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="city-form">
      <h2>Weather App</h2>
      <p>Enter a city to get the current weather.</p>
      <input
        type="text"
        name="city"
        required
        value={city}
        onChange={handleChange}
        disabled={loading}
      />
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <button type="submit">Get Weather</button>
      )}
    </form>
  );
}
