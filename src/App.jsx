import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [fetched, setFetched] = useState(false);

  return !fetched ? (
    <Form setFetched={setFetched} setWeatherData={setWeatherData} />
  ) : (
    <Card weatherData={weatherData} />
  );
}

export default App;
