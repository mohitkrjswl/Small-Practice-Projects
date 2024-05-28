import './App.css';
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetail from './components/TempAndDetail';
import Forcast from './components/Forcast';
import getweatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getweatherData('weather', { q: 'delhi' });
    console.log(data);
  };
  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-950 to-cyan-600 h-fill shadow-xl shadow-gray-400 rounded-lg">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetail />
      <Forcast title="hourly forecast" />
      <Forcast title="daily forecast" />
    </div>
  );
}

export default App;
