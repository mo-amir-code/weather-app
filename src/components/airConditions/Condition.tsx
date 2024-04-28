import { CiTempHigh } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";


const Condition = ({icon, name, value}:{icon:string, name:string, value:string}) => {

    const getIcon = () => {
        switch(icon){
            case "temp":
                return <CiTempHigh className="text-text-primary max-sm:w-5 max-sm:h-5 w-6 h-6" />
            case "wind":
                return <BiWind className="text-text-primary max-sm:w-5 max-sm:h-5 w-6 h-6" />
            case "humidity":
                return <WiHumidity className="text-text-primary max-sm:w-5 max-sm:h-5 w-6 h-6" />
            default: 
               return null
        }
    }

  return (
    <div className='flex gap-2' >
        <span>
        {getIcon()}
        </span>
        <div className="space-y-2" >
            <span className="block max-sm:text-sm text-text-primary">{name}</span>
            <span className="text-4xl max-sm:text-base whitespace-nowrap block font-medium" >{value}</span>
        </div>
    </div>
  )
}

export default Condition
