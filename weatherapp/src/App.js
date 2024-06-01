import './App.css';
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetail from './components/TempAndDetail';
import Forcast from './components/Forcast';
import getFormatedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({ q: 'delhi' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      )
    };
    fetchWeather();
  }, [query, units])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-indigo-950 to-cyan-400 h-fill shadow-xl shadow-gray-400 rounded-lg">
      <TopButtons />
      <Inputs />
      {weather && (
        <div>
          <TimeAndLocation />
          <TempAndDetail />
          <Forcast title="hourly forecast" />
          <Forcast title="daily forecast" />
        </div>
      )}

    </div>
  );
}

export default App;


