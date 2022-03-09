import { useState } from 'react'
import Display from './Components/Display'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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