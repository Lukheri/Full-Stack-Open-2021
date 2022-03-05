import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statistics = ({ good, neutral, bad }) =>{
  const total = good+neutral+bad

  if (total === 0) {
    return(
      <p>No feedback given</p>
    )
  }

  else{
     return(
      <div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={total} />
            <StatisticLine text={"average"} value={(good-bad)/total} />
            <StatisticLine text={"positive"} value={`${(good/total)*100}%`} />
          </tbody>
        </table>
      </div>
    ) 
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App