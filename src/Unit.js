import React, { Component } from 'react';

class Unit extends Component {
  render(label, id) {
    var opts = {};
    opts.id = this.props.id;
    return (
    <div className="formInput">{this.props.label}<br />
      <select {...opts}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
        <option value="R">Rankine</option>
      </select>
    </div>
    );
  }
}
export default Unit;
