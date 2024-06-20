const PersonForm = ({newName, onNameChange, newNumber, onNumberChange, onSubmit}) => {
    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <label htmlFor="person-name">
                            name:
                            <input id="person-name" type="text" value={newName} onChange={(event) => onNameChange(event.target.value)}/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="person-number">
                            number:
                            <input id="person-number" type="text" value={newNumber} onChange={(event) => onNumberChange(event.target.value)}/>
                        </label>
                    </li>
                </ul>
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default PersonForm;