import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text} {props.value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(prevGood => prevGood +1)
  const increaseNeutral = () => setNeutral(prevNeutral => prevNeutral +1)
  const increaseBad = () => setBad(prevBad => prevBad +1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text={"good"} />
      <Button handleClick={increaseNeutral} text={"neutral"} />
      <Button handleClick={increaseBad} text={"bad"} />
      <h1>statistics</h1>
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />
      <Display text={"all"} value={good+neutral+bad} />
      <Display text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <Display text={"positive"} value={`${(good/(good+neutral+bad))*100}%`} />
    </div>
  )
}

export default App