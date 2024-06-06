const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.name} part={part} />)}
    </div>
  )
}

const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach(part => {
    sum = sum + part.exercises
  });
  return <p>Number of exercises {sum}</p>;
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
