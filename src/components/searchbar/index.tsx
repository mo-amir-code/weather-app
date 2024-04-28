import { useEffect, useState } from "react";
import { useWeatherContext } from "../../context/weather"
import useGetCurrentLocation from "../customhooks/useGetCurrentLocation";


const Index = () => {
  const { searchWeather } = useWeatherContext();
  const [city, setCity] = useState<string>("");
  const cityName = useGetCurrentLocation()


  const handleSearch = () => {
    searchWeather({city});
  }

  const handleOnChange = (value:string) => setCity(value);

  useEffect(() => {
    if(cityName) setCity(cityName);
  }, [cityName]);

  return (
    <div className="flex items-center gap-2 text-sm" >
        <input placeholder="Search For City" onChange={(e) => handleOnChange(e.target.value)} value={city} className="w-full px-2 py-3 text-white bg-secondary-color rounded-lg" />
        <button onClick={()=> handleSearch()} className="px-4 py-3 active:scale-90 transition-all duration-200 text-white font-medium rounded-lg bg-secondary-color whitespace-nowrap" >Get Weather</button>
    </div>
  )
}

export default Index
