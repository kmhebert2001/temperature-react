import React, { Component } from 'react';

class Temperature extends Component {
  render(label, id) {
    var opts = {};
    opts.id = this.props.id;
    return (
    <div className="formInput">{this.props.label}<br />
      <input type="text" {...opts} />
    </div>
    );
  }
}

export default Temperature;
