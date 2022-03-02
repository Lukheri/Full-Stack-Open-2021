import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Feedbacks = ({ feedbacks }) => (
  <div>
    <Button handleClick={feedbacks.goodFeedback.increase} text={feedbacks.goodFeedback.text} />
    <Button handleClick={feedbacks.neutralFeedback.increase} text={feedbacks.neutralFeedback.text} />
    <Button handleClick={feedbacks.badFeedback.increase} text={feedbacks.badFeedback.text} />
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = {
    goodFeedback: {
      value:good,
      text:"good",
      increase: () => setGood(prevGood => prevGood +1)
    },
    neutralFeedback: {
      value:neutral,
      text:"neutral",
      increase: () => setNeutral(prevNeutral => prevNeutral +1)
    },
    badFeedback: {
      value:bad,
      text:"bad",
      increase: () => setBad(prevBad => prevBad + 1)
    }
  }

  const Display = props => <div>{props.text} {props.value}</div>

  return (
    <div>
      <h1>give feedback</h1>
      <Feedbacks feedbacks={feedbacks} />
      <h1>statistics</h1>
      <Display text={feedbacks.goodFeedback.text} value={good} />
      <Display text={feedbacks.neutralFeedback.text} value={neutral} />
      <Display text={feedbacks.badFeedback.text} value={bad} />
      <Display text={"all"} value={good+neutral+bad} />
      <Display text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <Display text={"good-bad"} value={good-bad} />
    </div>
  )
}

export default App