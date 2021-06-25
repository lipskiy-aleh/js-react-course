import moment from 'moment'
import React from 'react'
import { WeekTodos } from './components/WeekTodos'

const START_DATE_QUERY_PARAM = 'startDate'

export class WeeklyTodo extends React.Component {
  constructor(props) {
    super(props)

    console.log('constructor', props)

    this.state = {
      startDate: this.getDefaultDate(props.location.search),
    }
  }

  getDefaultDate(searchStr) {
    const params = searchStr.slice(1).split('&').reduce((acc, el) => {
      const [key, value] = el.split('=')
      acc[key] = value
      return acc
    }, {})

    const startDate = params[START_DATE_QUERY_PARAM] || moment().day(1).format('DD-MM-YYYY')
    return startDate
  }

  changeWeek = (showNext) => {
    const { startDate } = this.state
    const numberOfDays = showNext ? 7 : -7
    const momentStartDate = moment(startDate, 'DD-MM-YYYY').add(numberOfDays, 'days');
    this.setState({
      startDate: momentStartDate.format('DD-MM-YYYY')
    }, () => {
      const path = this.props.location.pathname
      const date = this.state.startDate

      const url = `${path}?${START_DATE_QUERY_PARAM}=${date}`
      this.props.history.push(url)
    })

  }

  onBackClick = () => {
    this.changeWeek(false)
  }

  onNextClick = () => {
    this.changeWeek(true)
  }

  render() {
    const { startDate } = this.state

    return (
      <div>
        <ul className="navigation">
          <li>
            <button onClick={this.onBackClick}>{"<"}</button>
          </li>

          <li>
            <button onClick={this.onNextClick}>{">"}</button>
          </li>
        </ul>

        <WeekTodos startDate={startDate} test="test"/>
      </div>
    )
  }
}
