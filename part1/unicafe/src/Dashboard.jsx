const Dashboard = ({good, neutral, bad}) => {
    if(good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {good + neutral + bad}</li>
                <li>Average: {(good - bad) / (good + neutral + bad)}</li>
                <li>Positive: {(good / (good + neutral + bad)) * 100} %</li>
            </ul>
        </div>
    )
}

export default Dashboard;