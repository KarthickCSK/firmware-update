import React, { Component } from 'react'
import Log from '../log/log';
export default class Reboot extends Component {
  render() {
    return (
      <div>
        <div className="row update-row">
          <div className="col-6">
            <Log />
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
    )
  }
}
