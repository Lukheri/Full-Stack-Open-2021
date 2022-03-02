const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts.parts[0]} exercises={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} exercises={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} exercises={props.parts.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.name}: {props.part.exercises}</p>
    </div>
  )
}

// Exercise 1.1 - 1.2
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3} 
//       exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//       <Total exercises={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

// Exercise 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1.name} part2={part2.name} part3={part3.name}
//       exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
//       <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
//     </div>
//   )
// }

// Exercise 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

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
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App

