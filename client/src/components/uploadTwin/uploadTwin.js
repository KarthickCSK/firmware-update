import React, { Component } from "react";
import axios from "axios";
import "./uploadTwin.css";
const { REACT_APP_VM_SERVER, REACT_APP_UPDATE_TWIN } = process.env;

export default class UploadTwin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareVersion: "1.0.0.006",
      updateTwinLoading: false,
      url:
        "https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"
    };
  }
  updateTwin = e => {
    e.preventDefault();
    const { softwareVersion, url } = this.state;
    if (softwareVersion === "" || url === "") {
      alert("Please enter all the fields");
    } else {
      this.setState({ updateTwinLoading: true });
      axios({
        method: "post",
        url: REACT_APP_VM_SERVER + REACT_APP_UPDATE_TWIN ,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":"Authorization, Content-Type",
          "Access-Control-Allow-Methods": "POST"
        },
        data: {
          software_version: softwareVersion,
          url: url
        }
      })
        .then(response => {
          console.log(response);
          alert('Firmware updated successfully')
          this.setState({ updateTwinLoading: false });
        })
        .catch(err => {
          console.log(err);
          alert('Error in Firmware update')
          this.setState({ updateTwinLoading: false });
        });
    }
  };
  handleInput = e => {
    const { name, value } = e.target;
    if (name === "url") {
      this.setState({ url: value });
    }
    if (name === "softwareVersion") {
      this.setState({ softwareVersion: value });
    }
  };
  render() {
    const { url, softwareVersion, updateTwinLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.updateTwin}>
          <div class="form-group">
            <label for="exampleInputEmail1">Software version</label>
            <input
              type="software-version"
              class="form-control"
              id="software"
              value={softwareVersion}
              name="softwareVersion"
              aria-describedby="softwareHelp"
              placeholder="Enter software version"
              onChange={this.handleInput}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Blob URL</label>
            <input
              type="text"
              value={url}
              name="url"
              class="form-control"
              id="blobUrl"
              placeholder="Enter Blob URL"
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="cust-btn">
            {updateTwinLoading?'Updating Firmware..':'Update firmware'}
          </button>
        </form>
      </div>
    );
  }
}
