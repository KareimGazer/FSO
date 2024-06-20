import { useState } from 'react'
import Anecdote from './Anecdote'

const cleanAnecdotes = (anecdotes) => {
  return anecdotes.map((anecdote, i) => {
    return {
      id: i,
      votes: 0,
      anecdote: anecdote,
    }
  })
}

const App = ({rawAnecdotes}) => {
  const [anecdotes, setAnecdotes] = useState(cleanAnecdotes(rawAnecdotes));
  const [selected, setSelected] = useState(0);

  const getMostVotedAnecdote = (anecdotes) => anecdotes.reduce((max, current) => max.votes > current.votes ? max : current);

  const handelOnVote = () => {
    setAnecdotes(anecdotes.map((anecdote, i) => i === selected ? {...anecdote, votes: anecdote.votes + 1} : anecdote));
  }

  const handelOnNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const mostVotedAnecdote = getMostVotedAnecdote(anecdotes);

  return (
    <div>
      <Anecdote title={"Anecdote of the day"}
                anecdote={anecdotes[selected].anecdote}
                votes={anecdotes[selected].votes}>
        <button onClick={handelOnVote}>vote</button>
        <button onClick={handelOnNext}>next anecdote</button>
      </Anecdote>
      <Anecdote title={"Anecdote with most votes"}
                anecdote={mostVotedAnecdote.anecdote}
                votes={mostVotedAnecdote.votes}/>
    </div>
  )
}

export default App