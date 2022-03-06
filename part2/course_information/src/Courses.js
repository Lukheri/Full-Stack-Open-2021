const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <h4>Number of exercises {sum}</h4>

const Part = ({ part }) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  const total = course.parts.map(exercise => exercise.exercises)
  const sum = total.reduce((x,y) => x+y)

  return(
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>  
  )
}

const Courses = ( {courses, curriculum} ) => {
  return(
    <>
      <h1>{curriculum}</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}

export default Courses