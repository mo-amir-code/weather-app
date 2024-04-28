import dayIcon from "../../assets/day_sun.png"
import nightIcon from "../../assets/night.png"
import { useWeatherContext } from "../../context/weather";

const Index = () => {
  const {data} = useWeatherContext();

  return (
    <div className="flex justify-around">
      <div className="flex flex-col gap-10 justify-between">
        <div className="space-y-2" >
          <h1 className="text-3xl max-sm:text-xl text-white font-medium">{data?.location.name}</h1>
          <p className="text-text-primary text-sm max-sm:text-xs">Current Time: {data?.location.localtime}</p>
          <p className="text-text-primary text-sm max-sm:text-xs">Region: {data?.location.region}</p>
          <p className="text-text-primary text-sm max-sm:text-xs">Country: {data?.location.country}</p>
        </div>
        <span className="text-5xl max-sm:text-2xl text-white font-semibold" >{data?.current.temp_c}°C|°F</span>
      </div>
      <div className="flex items-center justify-center" >
        <img src={data? data?.current?.is_day === 1? dayIcon : nightIcon : dayIcon} className="w-[200px] max-sm:w-[80px] image-with-white-background" alt="day or night icon" />
      </div>
    </div>
  );
};

export default Index;
