import { useWeatherContext } from "../../context/weather"
import Condition from "./Condition"


const Index = () => {
    const { data } = useWeatherContext();

  return (
    <div className="p-4 flex sm:justify-around justify-between gap-4 hide-scrollbar overflow-x-auto text-white rounded-lg bg-secondary-color" >
      <Condition icon="temp" name="Temprature" value={`${data?.current.temp_c}°`} />
      <Condition icon="wind" name="Wind" value={`${data?.current.wind_kph} kph`} />
      <Condition icon="humidity" name="Humidity" value={`${data?.current.humidity}%`} />
    </div>
  )
}

export default Index
