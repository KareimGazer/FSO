import { useState } from 'react'
import { useEffect } from 'react'
import contacts from './services/persons'
import Dashboard from './Dashboard'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PeopleList from './PeopleList'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState(null)

  const handelSubmit = (event) => {
    event.preventDefault()
    if(!newName || !newNumber) {
      setMessage('Error: Please enter a name and number')
      return
    }
    if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const updatedPerson = {...person, number: newNumber}
        contacts.update(person.id, updatedPerson).then((updatedPerson) => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`Updated ${updatedPerson.name}'s number`)
        }).catch(error => {
          setMessage(`Error: Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
      return
    }
    if(persons.find(person => person.number === newNumber)) {
      setMessage(`Error: ${newNumber} is already added to phonebook`)
      return
    }
    const person = {name: newName,number: newNumber}
    contacts.create(person).then((addedPerson) => {
      setPersons(persons.concat(addedPerson))
      setNewName('')
      setNewNumber('')
      setMessage(`Added ${addedPerson.name}`)
    })
  }

  const handelDelete = (id) => {
    const removedPerson = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${removedPerson.name}?`)) {
      contacts.remove(id).then(() => {
        // the response data is not needed since the contact has been deleted
        // and only the filter will be appllied when the operation is successful
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${removedPerson.name}`)
      }).catch(error => {
        setMessage(`Error: Information of ${removedPerson.name} has already been removed from server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
        <Notification message={message}/>
        <Filter term={searchTerm} onFilter={setSearchTerm}></Filter>
        <PersonForm newName={newName} onNameChange={setNewName} newNumber={newNumber} onNumberChange={setNewNumber} onSubmit={handelSubmit}/>
      </Dashboard>
      <PeopleList title={'Your List of Contacts'} people={filteredPersons} onDelete={handelDelete}/>
    </>
  )
}

export default App