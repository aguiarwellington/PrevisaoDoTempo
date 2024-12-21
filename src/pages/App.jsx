import { useState, useRef } from 'react';
import axios from 'axios';
import WeatherInfo from '../Components/WeatherInfo/WeatherInfo';
import WeatherInfo5Days from '../Components/WeatherInfo5Days/weatherInfo5Days';

import './App.css';

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "85baaa5ca7a0045ce84ae704c4952df9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiInfo = await axios.get(url);
      const apiInfo5Days = await axios.get(url5Days)
      setWeather(apiInfo.data);
      setWeather5Days(apiInfo5Days.data)
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }

  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
     
    </div>
  );
}

export default App;