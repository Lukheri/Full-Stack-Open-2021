import ShowCountry from "./ShowCountry"
import DisplayFilteredCountries from "./DisplayFilteredCountries"

const Display = ({ countries, filter }) => {
    if (countries){
      const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
      if (filteredCountries.length > 10){
        return <>Too many matches, specify another filter</>
      }
  
      else if (filteredCountries.length === 1){
        return(
          <ShowCountry country={filteredCountries[0]} />
        )
      }
  
      else{
        return(
          <ul>
            {filteredCountries.map((country, i) => <DisplayFilteredCountries key={i} country={country} />)}
          </ul>
        )         
      }
    }
  
    return <></>
  }

export default Display