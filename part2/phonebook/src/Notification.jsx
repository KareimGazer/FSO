const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    const color = message.includes('Error') ? 'red' : 'green';
    return (
        <div className="error" style={{ color }}>
            {message}
        </div>
    )
}

export default Notification;