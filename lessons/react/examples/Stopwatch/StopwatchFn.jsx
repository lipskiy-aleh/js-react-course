import {
  useState,
  useRef
} from "react"

export function Stopwatch(props) {
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)

  const timerId = useRef(null)

  const tick = () => {
    let newSecond = second + 1
    let newMinute = minute
    let newHour = hour

    if(newSecond > 59) {
      newSecond = 0
      newMinute += 1
    }

    if(newMinute > 59) {
      newMinute = 0
      newHour += 1
    }

    setSecond(newSecond)
    setMinute(newMinute)
    setHour(newHour)
  }

  const onStopClick = () => {
    clearInterval(timerId.current)
    timerId.current = null
    onResetClick()
  }
  const onStartClick = () => {
    timerId.current = setInterval(tick, 1000)
  }
  const onResetClick = () => {
    setSecond(0)
    setMinute(0)
    setHour(0)
  }


  return (
    <div>
      <div>
        {`${hour}: ${minute}: ${second}`}
      </div>
      <button onClick={onStopClick}>Stop</button>
      <button onClick={onStartClick}>Start</button>
      <button onClick={onResetClick}>Reset</button>
    </div>
  )
}
