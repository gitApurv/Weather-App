import "./Card.css";

export default function Card({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="card">
        <p>No Data Found</p>
      </div>
    );
  }

  const {
    current: { temp_c, temp_f, is_day, humidity, vis_km, wind_kph },
  } = weatherData;

  return (
    <div className="card">
      <h2>Weather Information</h2>
      <p>
        Current Temperature: {temp_c}C {temp_f}F
      </p>
      <p>Day/Night: {is_day === 0 ? "Night" : "Day"}</p>
      <p>Humidity: {humidity}</p>
      <p>Visibility: {vis_km} km</p>
      <p>Wind Speed: {wind_kph} kph</p>
    </div>
  );
}
