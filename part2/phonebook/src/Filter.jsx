const Filter = ({term, onFilter}) => {

    return (
        <label htmlFor="search-bar">
            search for:
            <input id="search-bar" type="text" value={term} onChange={(event) => onFilter(event.target.value)}/>
            <button type="submit">search</button>
        </label>

    )
}

export default Filter;