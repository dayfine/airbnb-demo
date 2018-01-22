import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import 'react-dates/initialize'
import { DayPickerRangeController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import MediaQuery from 'react-responsive'
import moment from 'moment'

const DateRange = styled.div`
  padding-left: 8px;
  padding-top: 30px;
  padding-bottom: 40px;
  position: fixed;
  z-index; 20;
  left: 0;
  width: 100%;
  top: 48px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`

const DateInRange = styled.span`
  display: inline-block;
  font-size: 18px;
  color: ${props => (props.isActive ? '#0f7276' : '#636363')}
  border-bottom: ${props => (props.isActive ? '1px solid #008489' : 'none')}
  padding-bottom: 4px;
`
const getLabel = isSelected => isSelected ? 'Check in - Check out' : 'Dates'


const DatePicker = props => (
  <DayPickerRangeController
    onDatesChange={this.onDatesChange}
    onFocusChange={this.onFocusChange}
    focusedInput={focusedInput}
    startDate={startDate}
    endDate={endDate}
    orientation='vertical'
    numberOfMonths={1}
    minimumNights={1}
    isDayBlocked={day => day.isBefore(moment(), 'day')}
    hideKeyboardShortcutsPanel
    {...props}
  />
)

export default class Dates extends React.Component {
  constructor (props) {
    this.state = {
      isSelected: false,
      focusedInput: props.autoFocusEndDate ? 'endDate' : 'startDate',
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }

  onFocusChange = focusedInput => {
    this.setState({ focusedInput: focusedInput ? focusedInput : 'startDate' })
  }

  onToggle = isSelected => {
    this.setState({ isSelected: !this.state.isSelected })
  }

  render() {
    const { focusedInput, startDate, endDate, isSelected } = this.state
    return (
      <Dropdown
        onToggle={this.onToggle}
        label={getLabel(isSelected)}
        xsHeading='When'
      >
        <MediaQuery query='(max-width: 767px)'>
          <DateRange>
            <DateInRange isActive>Check-in</DateInRange>
            <i class="fa fa-arrow-right" aria-hidden="true" />
            <DateInRange>Check-out</DateInRange>
            <DatePicker />
          </DateRange>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={985}>
          <DatePicker orientation='horizontal'/>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={985}>
          <DatePicker orientation='horizontal' numberOfMonths={2}/>
        </MediaQuery>
      </Dropdown>
    )
  }
}
