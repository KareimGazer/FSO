const Anecdote = ({title, anecdote, votes, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{anecdote}</p>
            <p>Has {votes} votes</p>
            {children}
        </div>
    )
}

export default Anecdote;