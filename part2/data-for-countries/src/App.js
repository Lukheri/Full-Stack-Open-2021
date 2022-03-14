
import { useState, useEffect } from 'react'
import axios from 'axios'

const Display = ({ countries, filter }) => {
  if (countries){
    const arr = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (arr.length > 10){
      return <>Too many matches, specify another filter</>
    }

    else if (arr.length === 1){
      const filtered_country = arr[0]
      return(
        <div>
          <h2>{filtered_country.name.common}</h2>
          capital: {filtered_country.capital}<br></br>
          area: {filtered_country.area}
          <h3>languages:</h3>
          <ul>
            {Object.keys(filtered_country.languages).map((language, i) => <li key={i}>{filtered_country.languages[language]}</li>)}
          </ul>
          <img src={filtered_country.flags.png} />
        </div>
      )
    }

    else{
      return(
        <ul>
          {arr.map(country => <li key={country.name.common}>{country.name.common}</li>)}
        </ul>
      )         
    }
  }

  return <></>
}

const Country = ({ country, filter }) => {

  if (country.toLowerCase().includes(filter.toLowerCase())){
    return(
        <li> {country} </li>
    )
  }  

  return(
    <></>
  )
}

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
