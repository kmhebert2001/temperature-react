import React, { Component } from 'react';
class Result extends Component {
  render(result) {
    if (this.props.result) {
      return (
      <div className="formInput">Result
        <div id="result">{this.props.result}</div>
      </div>)
    } else {
      return (<div className="formInput">Result
        <div id="result">&nbsp;</div>
      </div>)
    }
    
  }
}
export default Result;
