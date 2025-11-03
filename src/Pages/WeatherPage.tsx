import React, { useContext, useEffect, useState } from "react";
import { Axios } from "../Services/ApiService";
import { WeatherResponse } from "../Helpers/Model";
import { UseToast } from "../Context/ToastContext";
import { useDebounce } from "../Hooks/useDebounce";

export const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState<WeatherResponse>();
    // const [location, setLocation] = useState<Location | null>(null);
    // const [error, setError] = useState<string | null>(null);
    const [cityName, setCityName] = useState<string>();
    const { showToast } = UseToast();
    const debouncedCity = useDebounce(cityName ?? 'Chennai', 600);

    // useEffect(() => {
    //     if (!navigator.geolocation) {
    //         setError("Geolocation is not supported by your browser");
    //         return;
    //     }

    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             setLocation({
    //                 lat: position.coords.latitude,
    //                 lon: position.coords.longitude,
    //             });
    //         },
    //         (err) => {
    //             setError(err.message);
    //         }
    //     );
    // }, []);
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
        if (debouncedCity && debouncedCity.trim() !== "" && debouncedCity.length > 3) {
            fetchWeatherData(debouncedCity);
        }
    }, [debouncedCity]);

    const fetchWeatherData = async (city: string) => {
        try {
            const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
            setWeatherData(response.data);
            showToast('Weather data fetched successfully!', 'success');
            console.log(response, "weather response")
        } catch (error) {
            showToast('Failed to fetch weather data!', 'error');
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center gap-3 p-4 bg-fuchsia-100">
                <div className="flex flex-row bg-white rounded p-4 w-full max-w-xs">
                    <input type="text"
                        name="cityName"
                        id=""
                        placeholder="Enter your city name"
                        className="w-full px-4 py-2 rounded-xl"
                        onChange={(event) => setCityName(event.target.value)} />
                </div>
                <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
                    <div className="font-bold text-xl">{weatherData?.name}</div>
                    <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
                    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                        <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                        <div className="font-medium text-6xl">{weatherData?.main.temp}°C</div>
                        <div className="flex flex-col items-center ml-6">
                            <div>Cloudy</div>
                            <div className="mt-1">
                                <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                                <span className="text-sm font-light text-gray-500">{weatherData?.main.temp_max}°C</span>
                            </div>
                            <div>
                                <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                                <span className="text-sm font-light text-gray-500">{weatherData?.main.temp_min}°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-6">
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Wind</div>
                            <div className="text-sm text-gray-500">9k/h</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Humidity</div>
                            <div className="text-sm text-gray-500">{weatherData?.main.humidity}%</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Visibility</div>
                            <div className="text-sm text-gray-500">{((weatherData?.visibility ?? 1) / 1000).toFixed(2)}km</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}