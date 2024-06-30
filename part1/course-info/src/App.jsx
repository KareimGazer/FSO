import courses from "./courses";
import Course from "./Course";


const App = () => {
  
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App
