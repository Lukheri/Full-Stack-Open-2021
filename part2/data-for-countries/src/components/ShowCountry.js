import Weather from "./Weather"

const ShowCountry = ({ country }) =>{
    return(
      <div>
        <h2>{country.name.common}</h2>
        capital: {country.capital}<br></br>
        area: {country.area}
        <h3>languages:</h3>
        <ul>
          {Object.keys(country.languages).map((language, i) => <li key={i}>{country.languages[language]}</li>)}
        </ul>
        <img src={country.flags.png} />
        <Weather country={country} />
      </div>
    )
  }

export default ShowCountry