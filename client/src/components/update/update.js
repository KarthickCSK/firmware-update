import React, { Component } from 'react';
import axios from 'axios'
import './update.css'
import StyledProgressbar from '../common/styledProgressBar';
const {
  REACT_APP_VM_SERVER,
  REACT_APP_GETSTATUS
} = process.env;
export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firmwareStatuses:[{"otaStatus": "SoftwareUpdateComplete", "currentVersion": "1.0.0.006", "pendingVersion": ""}],
      getFirmwareLoading:false
    }
  }

  
  componentWillMount() {
    this.getStatus();
  }
  
  getStatus = () => {
    this.setState({ getFirmwareLoading: true });
    axios({
      method: "get",
      url: REACT_APP_VM_SERVER + REACT_APP_GETSTATUS
    })
      .then(response => {
        console.log(response);
        this.setState({ firmwareStatuses: [{...response.data}] });
        this.setState({ getFirmwareLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ getFirmwareLoading: false });
      });
  }

  showStatus = (status, index) => {
    let percentage = 0;
    switch(status.otaStatus) {
      case "WaitingForUpdate":
        percentage = 5;
        break;
      case "SoftwareUpdateinProgress":
        percentage = 15;
        break;
      case "SoftwareUpdateComplete":
        percentage = 25;
        break;
      case "DownloadComplete":
        percentage = 40;
        break;
      case "UnzipComplete":
        percentage = 55;
        break;
      case "ReadPackageDataComplete":
        percentage = 70;
        break;
      case "PreInstallComplete":
        percentage = 85;
        break;
      case "InstallComplete":
        percentage = 100;
        break;
      default:
        percentage = 0;
      }
    return(
      <div className="status-container" key={index}>
        <div className="status-details-container">
          <b>OTA Status: </b><span>{status.otaStatus}</span><br />
          <b>Current version: </b><span>{status.currentVersion}</span><br />
          <b>Pending Status: </b><span>{status.pendingVersion}</span><br />
        </div>
        <div style={{ width: '76px' }}>
          <StyledProgressbar percentage={percentage} text={`${percentage}%`} />
        </div>
      </div>
    )
  }
  render() {
    const { firmwareStatuses, getFirmwareLoading } = this.state;
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
                {firmwareStatuses.map((status, index)=>this.showStatus(status, index))}
              </div>
              <div className="modal-footer">
                <button type="button" className="cust-btn">View Logs</button>
                <img className="refresh-firm" src={require('./refresh.svg')} title="refresh" alt="..." onClick={this.getStatus}/>
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
