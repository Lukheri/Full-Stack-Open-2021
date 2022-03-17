
import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import Weather from './components/Weather'

// const Display = ({ countries, filter }) => {
//   if (countries){
//     const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

//     if (filteredCountries.length > 10){
//       return <>Too many matches, specify another filter</>
//     }

//     else if (filteredCountries.length === 1){
//       return(
//         <ShowCountry country={filteredCountries[0]} />
//       )
//     }

//     else{
//       return(
//         <ul>
//           {filteredCountries.map((country, i) => <DisplayFilteredCountries key={i} country={country} />)}
//         </ul>
//       )         
//     }
//   }

//   return <></>
// }

// const DisplayFilteredCountries = ({ country }) => {
//   const [show, setShow] = useState(false)

//   return(
//     <div>
//       <li>{country.name.common} <button onClick={() => setShow(!show)}>show</button></li>
//       {show && <ShowCountry country={country}/ >}
//     </div>
    
//   )
// }

{/* const ShowCountry = ({ country }) =>{
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
} */}


const App = () =>{
  const [countries, setCountry] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountry(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return(
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <Display countries={countries} filter={filter} />
    </div>
    
  )
}

export default App
