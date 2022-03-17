import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) =>{
    const [weather, setWeather] = useState('')
    const hook = () => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_NOT_SECRET_CODE}`)
        .then(response => {
          setWeather(response.data)
        })
    }
  
    useEffect(hook, [])
  
    const lat = country.latlng[0]
    const lon = country.latlng[1]

    if(weather){
        return(
            <div>
                <h2>Weather in {country.name.common}</h2>
                <>temperature {Math.round((weather.main.temp-273.15)*100)/100} celsius<br></br></>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /><br></br>
                <>wind {weather.wind.speed} m/s</>
            </div>            
        )
    }
    return(
        <></>
    )
}

export default Weather