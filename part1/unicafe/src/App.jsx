import FeedbackCard from "./FeedbackCard"
import { useState } from "react"

function App() {
  const [votes, setVotes] = useState({good: 0, neutral: 0, bad: 0})
  const handelGood = () => setVotes({...votes, good: votes.good + 1})
  const handelNeutral = () => setVotes({...votes, neutral: votes.neutral + 1})
  const handelBad = () => setVotes({...votes, bad: votes.bad + 1})
  return (
    <>
    <FeedbackCard onGood={handelGood} onNeutral={handelNeutral} onBad={handelBad}/>
    </>
  )
}

export default App
