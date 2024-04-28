import SearchBar from "./components/searchbar";
import Hero from "./components/hero";
import AirCondition from "./components/airConditions";
import { useWeatherContext } from "./context/weather";
import Loader from "./components/Loader";
import Empty from "./components/Empty";

function App() {
  const { isLoading, data } = useWeatherContext();

  return (
    <div className="w-full bg-primary-color min-h-screen">
      <main className="w-full space-y-8 font-poppins p-4 mx-auto max-w-7xl overflow-hidden">
        <SearchBar />
        {isLoading ? (
          <Loader />
        ) : 
          !data? <Empty msg="Search Weather For Your City" /> : <>
            <Hero />
            <AirCondition />
          </>
        }
      </main>
    </div>
  );
}

export default App;
