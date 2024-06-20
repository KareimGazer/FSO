const Person = ({person}) =>{
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
        </tr>
    )
}

const PeopleList = ({title, people}) => {
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
                    {people.map(person => <Person key={person.id} person={person}/>)}
                </tbody>
            </table>
        </>
    )
}

export default PeopleList;