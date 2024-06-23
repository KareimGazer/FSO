const Person = ({person, onDelete}) =>{
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={() => onDelete(person.id)}>delete</button></td>
        </tr>
    )
}

const PeopleList = ({title, people, onDelete}) => {
    return (
        <>
            <h1>{title}</h1>
            <table>
                <caption>found {people.length} result{people.length > 1 && 's'} </caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => <Person key={person.id} person={person} onDelete={onDelete}/>)}
                </tbody>
            </table>
        </>
    )
}

export default PeopleList;