import { useState, useEffect } from 'react';
import { useWeatherContext } from '../../context/weather';


const useGetCurrentLocation = () => {
  const [cityName, setCityName] = useState<string | null>(null);
  const { searchWeather } = useWeatherContext();

  const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async position => {
            const { latitude, longitude } = position.coords;
            try {
                const city = await fetchCityName(latitude, longitude)
                setCityName(city);
                searchWeather({city})
            } catch (error) {
                console.log(error);
            }
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
  }

  const fetchCityName = async (latitude: number, longitude: number): Promise<string> => {
    const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${import.meta.env.VITE_GEOCODE_API_KEY}`);
    const data = await response.json();
    return data?.address?.city
  };


  useEffect(() => {
    getLocation()
  }, [])

  return cityName;
};

export default useGetCurrentLocation;
