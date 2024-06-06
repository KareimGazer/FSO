const Header = ({ courseName }) => <h1>{courseName}</h1>;
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;
const Content = ({courseParts}) => {
  return (
    <div>
      {courseParts.map(part => <Part key={part.name} part={part} />)}
    </div>
  )
}

const Total = ({ courseParts }) => {
  let sum = 0;
  courseParts.forEach(part => {
    sum = sum + part.exercises
  });
  return <p>Number of exercises {sum}</p>;
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseName={course.name}/>
      <Content courseParts={course.parts}/>
      <Total courseParts={course.parts}/>
    </div>
  )
}

export default App
