
import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'

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
