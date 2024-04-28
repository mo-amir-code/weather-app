import { createContext, ReactNode, useContext, useState } from "react";


interface WeatherContextType{
    data: WeatherDataType | any,
    searchWeather: Function,
    isLoading: boolean
}

const initialContextValue = {
    data: null,
    searchWeather: () => {},
    isLoading: false
}

interface WeatherDataType{
    location: {
        name: string,
        region:string ,
        country: string,
        lat:number,
        lon: number,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: number,
        last_updated: string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    }
}

const WeatherContext = createContext<WeatherContextType>(initialContextValue);

const WeatherContextProvider = ({children}:{children: ReactNode}) => {
    const [data, setData] = useState<WeatherDataType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchWeather = async ({city}:{city: string}) => {
        try {
            setIsLoading(true);
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API}&q=${city}&aqi=yes`)
            const data = await res.json();
            setData(data)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        }
    }

    return (
        <WeatherContext.Provider value={{ data, searchWeather, isLoading }} >
            {children}
        </WeatherContext.Provider>
    )
}


export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherContextProvider