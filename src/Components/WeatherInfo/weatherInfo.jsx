import './weatherInfo.css';

function WeatherInfo({ weather }) {
  if (!weather.weather || weather.weather.length === 0) {
    return <div></div>;
  }

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p>{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
