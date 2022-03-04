import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react'

export const ClockFunc = (props) => {
  const { title } = props

  const btnRef = useRef(null)

  const [date, setDate] = useState(new Date())
  const [timerId, setTimerId] = useState(null)

  useEffect(() => {
    btnRef.current.focus()
    const timerId = setInterval(() => setDate(new Date()), 1000)
    setTimerId(timerId)
  }, [])

  const onStart = useCallback(() => {
    setDate(new Date())
    const timer = setInterval(() => setDate(new Date()), 1000)
    setTimerId(timer)
  }, [])

  const onStop = useCallback(() => {
    clearInterval(timerId)
    setDate(null)
    setTimerId(null)
  }, [timerId])

  const onBtnClick = useCallback(() => {
    if (date) {
      onStop()
    } else {
      onStart()
    }
  }, [date, onStop, onStart])

  const dateStr = useMemo(() => date?.toLocaleTimeString(), [date])

  const titleChangeDate = useMemo(() => new Date().toLocaleTimeString(), [title])

  return (
    <div>
      <h2>{title} {titleChangeDate}</h2>
      <h2>{dateStr}</h2>
      <button ref={btnRef} onClick={onBtnClick}>{date ? 'Stop' : 'Start'}</button>
    </div>
  )
}