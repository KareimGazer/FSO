const FeedbackCard = ({onGood, onNeutral, onBad}) => {
    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={onGood}>Good</button>
            <button onClick={onNeutral}>Neutral</button>
            <button onClick={onBad}>Bad</button>
        </div>
    )
}

export default FeedbackCard;