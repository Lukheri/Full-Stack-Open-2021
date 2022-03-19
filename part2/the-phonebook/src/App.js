import { useState, useEffect } from 'react'
import Display from './Components/Display'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPhoneBook => {
        setPersons(initialPhoneBook)
      })
  }

  useEffect(hook, [])

  const addForm = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      if (window.confirm(`${newName} is already in the phonebook, replace the old numbe with the new one?`)){
        const contact = persons.find(person => person.name === newName)
        const updatedContact = {...contact, number: newNumber}

        personService
          .update(contact.id, updatedContact)
          .then(returnedContact => {
            setPersons(persons.map(contact => contact.name !== newName ? contact : returnedContact))
            setNewName('')
            setNewNumber('')
          })
      }
      
    }

    else{
      const noteObject = {
        name: newName,
        number: newNumber
      }
      personService
      .create(noteObject)
      .then(returnedPhoneBook => {
        setPersons(persons.concat(returnedPhoneBook)) 
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deleteContact = (id, name) =>{
    if (window.confirm(`Delete ${name}?`)){
      const changedPhoneBook = persons.filter(contact => contact.id !== id)
      personService.remove(id)
      setPersons(changedPhoneBook)
    }

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
      <Display persons={persons} filter={filter} deleteContact={deleteContact}/>
    </div>
  )
}

export default App