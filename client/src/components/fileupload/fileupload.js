import React, { Component } from "react";
import Update from "../update/update";
import axios from "axios";
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./fileupload.css";
const {
  REACT_APP_SERVER,
  REACT_APP_GETBLOBS,
  REACT_APP_UPLOADBLOB
} = process.env;
const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Download Link',
  accessor: 'name',
  Cell: props => <span className='number'>{`https://wrdm2chetanpackage.blob.core.windows.net/firmware/${props.value}`}</span> // Custom cell components!
}]
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
        <td>{blob.name}</td>
        <td>
          <span className={`blob-${index}`}>{`https://wrdm2chetanpackage.blob.core.windows.net/firmware/${blob.name}`}</span>
        </td>
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
      <div className="container cust-home">
        <label><b>Firmwares in blob: </b></label>
        <ReactTable
          data={blobs}
          columns={columns}
          loading={getBlobsLoading}
          showPagination={true}
          defaultPageSize={3}
          resizable={true}
          sortable={false}
          loadingText={'Fetching firmwares..'}
          noDataText={'No Firmwares found..'}
        />
        <div className="upload-container">
        <label><b>Upload Firmware file to blob: </b></label>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                id="file"
                type="file"
                accept=".gz, .zip"
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
        <Update />
      </div>
    );
  }
}
