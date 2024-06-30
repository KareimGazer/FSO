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
  let sum = courseParts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {sum}</p>;
}

const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </>
  )
}

export default Course;