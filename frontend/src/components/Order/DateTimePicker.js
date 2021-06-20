import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {TimePicker} from "./TimePicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class DateTimePicker extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
    this.props.changeDate(date)
  }
 
  render() {
    return (
      <>
          <DatePicker className="datetime-picker"
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="dd/MM/yyyy"
              style={{width:"300px"}}
          />
          <TimePicker hourPicked={this.props.hourPicked}/>
      </>
    );
  }
  
}

export default DateTimePicker;