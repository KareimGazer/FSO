const Dashboard = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Dashboard;