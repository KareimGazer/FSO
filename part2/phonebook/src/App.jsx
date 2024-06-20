import { useState } from 'react'
import Dashboard from './Dashboard'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PeopleList from './PeopleList'

const App = () => {
  const [persons, setPersons] = useState([{ id: 0, name: 'Arto Hellas', number: '040-123456' }]) 
  const [newName, setNewName] = useState('')

  return (
    <>
      <Dashboard title={'Phonebook'}>
        <Filter></Filter>
        <PersonForm />
      </Dashboard>
      <PeopleList title={'Your List of Contacts'} people={persons}/>
      <form>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default App