import React, { Component } from 'react'

export default class Update extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <img className="img-upload" src={require('./play.svg')} alt="..." data-toggle="modal" data-target="#showFirmwareDetails"/>
                <p className="col-10 upload-text">
                  <b>Firmware update: </b> Updates device Firmware. Use parameter FwPackageUri to specify the URI of the firmware file
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="showFirmwareDetails" tabIndex="-1" role="dialog" aria-labelledby="showFirmwareDetails" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Firmware update</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6>Firmware name</h6>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{'width': '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                <hr/>
              </div>
              <div className="modal-footer">
                <button type="button" className="cust-btn">View Logs</button>
                <img className="close-firm" src={require('./close.svg')} title="close" alt="..." />
                <img className="upload-firm" src={require('./upload.svg')} title="upload" alt="..." />
                <img className="send-firm" src={require('./send.svg')} title="send" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
