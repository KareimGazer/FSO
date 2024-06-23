import { useState } from 'react'
import { useEffect } from 'react'
import contacts from './services/persons'
import Dashboard from './Dashboard'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PeopleList from './PeopleList'

const App = () => {
  const [persons, setPersons] = useState([]) 
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
    const person = {name: newName,number: newNumber}
    contacts.create(person).then((addedPerson) => {
      setPersons(persons.concat(addedPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const handelDelete = (id) => {
    const removedPerson = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${removedPerson.name}?`)) {
      contacts.remove(id).then(() => {
        // the response data is not needed since the contact has been deleted
        // and only the filter will be appllied when the operation is successful
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    contacts
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, []);

  return (
    <>
      <Dashboard title={'Phonebook'}>
        <Filter term={searchTerm} onFilter={setSearchTerm}></Filter>
        <PersonForm newName={newName} onNameChange={setNewName} newNumber={newNumber} onNumberChange={setNewNumber} onSubmit={handelSubmit}/>
      </Dashboard>
      <PeopleList title={'Your List of Contacts'} people={filteredPersons} onDelete={handelDelete}/>
    </>
  )
}

export default App