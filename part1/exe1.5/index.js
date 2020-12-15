import React from 'react';
import ReactDOM from 'react-dom';
const Header=(props)=>{
  console.log(props)
  return(
      <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  var total =0
  const items = props.parts.map(function(part){
    total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  })
  return (
    <div>
      <p>Number of exercises: {total} </p>
    </div>
  )
}

const App=()=>{
  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
}
  return (
      <div>
         <Header  course={course} />
         <Content parts={course.parts} />
         <Total   parts={course.parts} />
      </div>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);