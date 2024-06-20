import { useState } from "react"
import FeedbackCard from "./FeedbackCard"
import Statistics from "./Statistics"

function App() {
  const [votes, setVotes] = useState({good: 0, neutral: 0, bad: 0})
  const handelGood = () => setVotes({...votes, good: votes.good + 1})
  const handelNeutral = () => setVotes({...votes, neutral: votes.neutral + 1})
  const handelBad = () => setVotes({...votes, bad: votes.bad + 1})
  return (
    <>
    <FeedbackCard onGood={handelGood} onNeutral={handelNeutral} onBad={handelBad}/>
    <Statistics good={votes.good} neutral={votes.neutral} bad={votes.bad}/>
    </>
  )
}

export default App
