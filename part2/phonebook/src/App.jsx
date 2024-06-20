import { useState } from 'react'
import Dashboard from './Dashboard'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PeopleList from './PeopleList'

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas', number: '040-123456' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handelSubmit = (event) => {
    event.preventDefault()
    if(!newName || !newNumber) {
      alert('Please enter a name and number')
      return
    }
    if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if(persons.find(person => person.number === newNumber)) {
      alert(`${newNumber} is already assigned to "${persons.filter(person => person.number === newNumber)[0].name}"`)
      return
    }
    const person = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <Dashboard title={'Phonebook'}>
        <Filter term={searchTerm} onFilter={setSearchTerm}></Filter>
        <PersonForm newName={newName} onNameChange={setNewName} newNumber={newNumber} onNumberChange={setNewNumber} onSubmit={handelSubmit}/>
      </Dashboard>
      <PeopleList title={'Your List of Contacts'} people={filteredPersons}/>
    </>
  )
}

export default App