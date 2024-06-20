const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}
const FeedbackCard = ({onGood, onNeutral, onBad}) => {
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={onGood}>Good</Button>
            <Button onClick={onNeutral}>Neutral</Button>
            <Button onClick={onBad}>Bad</Button>
        </div>
    )
}

export default FeedbackCard;