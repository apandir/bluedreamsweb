import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Cloudy } from "lucide-react";

const BODRUM_LAT = 37.0344;
const BODRUM_LON = 27.4305;

const getWeatherIcon = (code: number) => {
  if (code === 0 || code === 1) return <Sun className="w-3.5 h-3.5 text-amber-400" />;
  if (code === 2) return <Cloudy className="w-3.5 h-3.5 text-primary-foreground/70" />;
  if (code === 3) return <Cloud className="w-3.5 h-3.5 text-primary-foreground/70" />;
  if (code >= 51 && code <= 57) return <CloudDrizzle className="w-3.5 h-3.5 text-blue-300" />;
  if (code >= 61 && code <= 67) return <CloudRain className="w-3.5 h-3.5 text-blue-400" />;
  if (code >= 71 && code <= 77) return <CloudSnow className="w-3.5 h-3.5 text-blue-200" />;
  if (code >= 95) return <CloudLightning className="w-3.5 h-3.5 text-yellow-300" />;
  return <Cloud className="w-3.5 h-3.5 text-primary-foreground/70" />;
};

const WeatherWidget = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [weatherCode, setWeatherCode] = useState<number>(0);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${BODRUM_LAT}&longitude=${BODRUM_LON}&current_weather=true`
        );
        const data = await res.json();
        setTemp(Math.round(data.current_weather.temperature));
        setWeatherCode(data.current_weather.weathercode);
      } catch {
        // silently fail
      }
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); // refresh every 10min
    return () => clearInterval(interval);
  }, []);

  if (temp === null) return null;

  return (
    <div className="flex items-center gap-1 text-primary-foreground/60" title="Bodrum, Türkiye">
      {getWeatherIcon(weatherCode)}
      <span className="font-body text-[11px] font-medium tracking-wider">{temp}°C</span>
    </div>
  );
};

export default WeatherWidget;
