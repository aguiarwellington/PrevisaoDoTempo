import './weatherInfo5Days.css';

function WeatherInfo5Days({ weather5Days }) {
  let dailyForecast = {};

  // Preenchendo o objeto dailyForecast
  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  // Pegando a previsão dos próximos 5 dias
  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  return (
    <div className="weather-info">
      <h1>Previsão para os próximos 5 dias</h1>
      <div className="forecast-container">
        {next5DaysForecast.map((forecast) => {
          const date = new Date(forecast.dt * 1000);
          const day = date.toLocaleDateString(undefined, {
            weekday: 'short', // Nome do dia (abreviado)
            day: 'numeric',   // Dia do mês
          });

          return (
            <div key={forecast.dt} className="daily-forecast">
              <p>{day}</p>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt={`Weather icon for ${day}`}
              />
              <p>{forecast.weather[0].description}</p>
              <p>
                {Math.round(forecast.main.temp_min)}°C 
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
