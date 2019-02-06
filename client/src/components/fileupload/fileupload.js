import React, { Component } from "react";
import Update from "../update/update";
import axios from "axios";
import "./fileupload.css";
const {
  REACT_APP_SERVER,
  REACT_APP_GETBLOBS,
  REACT_APP_UPLOADBLOB
} = process.env;
export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobs: [],
      getBlobsLoading: false,
      uploadFirmwareLoading: false
    };
  }

  componentWillMount() {
    this.getBlobDetails();
  }

  uploadFirmware = () => {
    if (this.state.selectedFile) {
      this.setState({ uploadFirmwareLoading: true });
      const formData = new FormData();
      formData.append("firmare", this.state.selectedFile);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios
        .post(REACT_APP_SERVER + REACT_APP_UPLOADBLOB, formData, config)
        .then(response => {
          console.log("ki", response);
          this.setState({ uploadFirmwareLoading: false });
          if (response.data.status) {
            alert(response.data.message);
            this.getBlobDetails();
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
          alert("Error in upload");
          this.setState({ uploadFirmwareLoading: false });
        });
      document.getElementById("file").value = "";
      this.setState({ selectedFile: null });
    } else {
      alert("Please select a file");
    }
  };

  getBlobDetails = () => {
    this.setState({ getBlobsLoading: true });
    axios({
      method: "get",
      url: REACT_APP_SERVER + REACT_APP_GETBLOBS
    })
      .then(response => {
        console.log(response);
        if (response.data.status) {
          this.setState({ blobs: response.data.blobs });
        }
        this.setState({ getBlobsLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ getBlobsLoading: false });
      });
  };
  showBlob = (blob, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{blob.name}</td>
        <td>{blob.lastModified}</td>
      </tr>
    );
  };
  handleselectedFile = event => {
    event.preventDefault();
    this.setState({ selectedFile: event.target.files[0] });
  };
  render() {
    const { blobs, getBlobsLoading } = this.state;
    return (
      <div>
        <div className="upload-container">
          <div className="input-group mb-3">
            <div className="custom-file">
              <b>Select a file:</b>&nbsp;
              <input
                id="file"
                type="file"
                onChange={this.handleselectedFile}
                name="myFile"
              />
              <br />
              <br />
            </div>
            <div className="input-group-append">
              <button
                type="button"
                className="cust-btn"
                onClick={this.uploadFirmware}
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Firmware name</th>
                <th scope="col">Date uploaded / Modified</th>
              </tr>
            </thead>
            <tbody>
              {!getBlobsLoading &&
                blobs.map((blob, index) => this.showBlob(blob, index))}
            </tbody>
          </table>
        </div>
        <Update />
      </div>
    );
  }
}
