import React, { Component } from 'react';
import './App.css';
import Temperature from './Temperature.js';
import Unit from './Unit.js';
import Result from './Result.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      result: '',
      teacherTemp: 0,
      teacherUnit: 'C',
      targetUnit: 'C',
      studentTemp: 0
    };
  }
  render() {
    return (
    <div className="App">
    <Container>
      <Row>Temperature Checker</Row>
      <Row>Please enter values below, the results will be calculated instantly.</Row>
      <form name="temperatureForm" id="temperatureForm">
      <Row>
      <Col>
      <Temperature label="Teacher Temp" id="teacherTemp"></Temperature>
      </Col>
      <Col>
      <Unit label="Teacher Unit" id="teacherUnit"></Unit>
      </Col>
      <Col>
      <Unit label="Target Unit" id="targetUnit"></Unit>
      </Col>
      <Col>
      <Temperature label="Student Temp" id="studentTemp"></Temperature>
      </Col>
      <Col>
      <Result result={this.state.result}></Result>
      </Col>
      </Row>
    </form>
   </Container>
  </div>
    );
  }
  componentDidMount() {
    this.calcTemps =this.calcTemps.bind(this);
    document.addEventListener("change", this.calcTemps);
    document.addEventListener("keyup", this.calcTemps);
  }
  calcTemps(e) {
    this.setState({[e.target.id] : e.target.value});
    setTimeout(function() {
    var teacherUnit = this.state.teacherUnit;
    var teacherTemp = this.state.teacherTemp;
    var targetUnit = this.state.targetUnit;
    var studentTemp = this.state.studentTemp;
    switch (targetUnit) {
      case 'F':
        teacherTemp = this.toFahrenheit(teacherUnit, teacherTemp);
      break;
      case 'K':
        teacherTemp = this.toKelvin(teacherUnit, teacherTemp);
      break;
      case 'R':
        teacherTemp = this.toRankine(teacherUnit, teacherTemp);
      break;
      case 'C':
        teacherTemp = this.toCelsius(teacherUnit, teacherTemp);
      break;
      default:
    }
    teacherTemp = Math.round(teacherTemp);
    studentTemp = Math.round(studentTemp);
    if (isNaN(teacherTemp)) { // requirements are for "incorrect" when studentTemp is NaN, implementing this way but should be followed up on to make sure
      this.updateResult('invalid');
    } else {
      if (studentTemp === teacherTemp) {
        this.updateResult('correct');
      } else {
        this.updateResult('incorrect');
      }
    }
  }.bind(this),0);
  }
  updateResult(result) {
    this.setState({ result: result});;
  }
  toCelsius(unit, temp) {
  if (!temp && temp !== 0) return;
  switch (unit) {
    case 'F':
      return ((temp - 32) *5/9);
    break;
    case 'K':
      return (temp - 273.15);
    break;
    case 'R':
      return ((temp - 491.67) * 5 / 9);
    break;
    case 'C':
      return temp;
    break;
    default:
  }
}

toFahrenheit(unit, temp) {
  if (!temp && temp !== 0) return;
  switch (unit) {
    case 'F':
      return temp;
    break;
    case 'K':
      return (((temp - 273.15) * 9 / 5) + 32);
    break;
    case 'R':
      return (temp - 459.67);
    break;
    case 'C':
      return ((temp * 9 / 5) + 32);
    break;
    default:
  }
}

toKelvin(unit, temp) {
  if (!temp && temp !== 0) return;
  switch (unit) {
    case 'F':
      return (((temp - 32) *5/9) + 273.15); 
    break;
    case 'K':
      return temp;
    break;
    case 'R':
      return (temp * 5 / 9);
    break;
    case 'C':
      return (temp + 273.15);
    break;
    default:
  }
}

toRankine(unit, temp) {
  if (!temp && temp !== 0) return;
  switch (unit) {
    case 'F':
      return (temp + 459.67);
    break;
    case 'K':
      return (temp * 1.8);
    break;
    case 'R':
      return temp;
    break;
    case 'C':
      return ((temp * 9 / 5) + 491.67);
    break;
    default:
  }
}
}

export default App;
