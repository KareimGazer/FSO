const StatisticsLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
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
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={good} />
                    <StatisticsLine text="Neutral" value={neutral} />
                    <StatisticsLine text="Bad" value={bad} />
                    <StatisticsLine text="Total" value={good + neutral + bad} />
                    <StatisticsLine text="Average" value={(good - bad) / (good + neutral + bad)} />
                    <StatisticsLine text="Positive %" value={(good / (good + neutral + bad)) * 100} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics;