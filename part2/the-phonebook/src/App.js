import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './Components/Display'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addForm = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      console.log('User already exists')
      window.alert(`${newName} is already in the phonebook`)
    }

    else{
      const noteObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(noteObject))  
    }
    setNewName('')
    setNewNumber('')
  }
  
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new Contact</h2>
      <PersonForm addForm={addForm} newName={newName} handleNewNameChange={handleNewNameChange}
      newNumber={newNumber} handleNewNumberChange={handleNewNumberChange} />
      <h2>Contacts</h2>
      <Display persons={persons} filter={filter} />
    </div>
  )
}

export default App