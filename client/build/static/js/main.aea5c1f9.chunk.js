(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(68)},33:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"},63:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(21),o=a.n(r),s=(a(33),a(7)),c=a(8),i=a(10),u=a(9),d=a(11),m=a(70),p=a(71),E=a(69),b=a(25),f=a(12),g=a.n(f),w=(a(54),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"})),h=w.REACT_APP_VM_SERVER,P=w.REACT_APP_UPDATE_TWIN,A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateTwin=function(e){e.preventDefault();var t=a.state,n=t.softwareVersion,l=t.url;""===n||""===l?alert("Please enter all the fields"):(a.setState({updateTwinLoading:!0}),g()({method:"post",url:h+P,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{software_version:n,url:l}}).then(function(e){console.log(e),alert("Firmware updated successfully"),a.setState({updateTwinLoading:!1})}).catch(function(e){console.log(e),alert("Erro in Firmware update"),a.setState({updateTwinLoading:!1})}))},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;"url"===n&&a.setState({url:l}),"softwareVersion"===n&&a.setState({softwareVersion:l})},a.state={softwareVersion:"1.0.0.006",updateTwinLoading:!1,url:"https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.url,a=e.softwareVersion;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.updateTwin},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Software version"),l.a.createElement("input",{type:"software-version",class:"form-control",id:"software",value:a,name:"softwareVersion","aria-describedby":"softwareHelp",placeholder:"Enter software version",onChange:this.handleInput})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Blob URL"),l.a.createElement("input",{type:"text",value:t,name:"url",class:"form-control",id:"blobUrl",placeholder:"Enter Blob URL",onChange:this.handleInput})),l.a.createElement("button",{type:"submit",className:"cust-btn"},"Update twin")))}}]),t}(n.Component),_=(a(56),a(22)),T=a.n(_);var v=function(e){return l.a.createElement(T.a,{percentage:e.percentage,text:e.text,strokeWidth:5,styles:{root:{},path:{stroke:"#2c55ba",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#2c55ba",fontSize:"30px"}}})},S=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"}),R=S.REACT_APP_VM_SERVER,C=S.REACT_APP_GETSTATUS,O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getStatus=function(){a.setState({getFirmwareLoading:!0}),g()({method:"get",url:R+C}).then(function(e){console.log(e),a.setState({firmwareStatuses:[Object(b.a)({},e.data)]}),a.setState({getFirmwareLoading:!1})}).catch(function(e){console.log(e),a.setState({getFirmwareLoading:!1})})},a.showStatus=function(e,t){var a=0;switch(e.otaStatus){case"WaitingForUpdate":a=5;break;case"SoftwareUpdateinProgress":a=15;break;case"DownloadComplete":a=25;break;case"UnzipComplete":a=40;break;case"ReadPackageDataComplete":a=55;break;case"PreInstallComplete":a=70;break;case"InstallComplete":a=85;break;case"SoftwareUpdateComplete":a=100;break;default:a=0}return l.a.createElement("div",{className:"status-container",key:t},l.a.createElement("div",{className:"status-details-container"},l.a.createElement("b",null,"OTA Status: "),l.a.createElement("span",null,e.otaStatus),l.a.createElement("br",null),l.a.createElement("b",null,"Current version: "),l.a.createElement("span",null,e.currentVersion),l.a.createElement("br",null),l.a.createElement("b",null,"Pending Status: "),l.a.createElement("span",null,e.pendingVersion),l.a.createElement("br",null)),l.a.createElement("div",{style:{width:"76px"}},l.a.createElement(v,{percentage:a,text:"".concat(a,"%")})))},a.state={firmwareStatuses:[],getFirmwareLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this,t=this.state,n=t.firmwareStatuses,r=t.getFirmwareLoading;return l.a.createElement("div",null,l.a.createElement("div",{className:"row update-row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(A,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header toggle-card",id:"headingOne"},l.a.createElement("div",{className:"row",style:{cursor:"pointer"},"data-toggle":"collapse","data-target":"#toggleFirmware",role:"button","aria-expanded":"false","aria-controls":"toggleFirmware"},l.a.createElement("img",{className:"img-upload",src:a(58),alt:"...","data-toggle":"modal","data-target":"#showFirmwareDetails"}),l.a.createElement("p",{className:"col-10 upload-text"},"Update firmware"))),l.a.createElement("div",null,l.a.createElement("div",{className:"collapse multi-collapse",id:"toggleFirmware"},l.a.createElement("div",{className:"card firm-card"},l.a.createElement("div",{className:"card-body"},n.length?n.map(function(t,a){return e.showStatus(t,a)}):l.a.createElement("p",{style:{"text-align":"center"}},"No records found")),l.a.createElement("div",{className:"toogle-footer"},l.a.createElement("button",{type:"button",className:"cust-btn"},"View Logs"),l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.getStatus},r?"Refreshing..":"Refresh"))))))))))}}]),t}(n.Component),L=a(24),N=(a(61),a(63),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"})),k=N.REACT_APP_SERVER,B=N.REACT_APP_GETBLOBS,y=N.REACT_APP_UPLOADBLOB,F=[{Header:"name",accessor:"name"},{Header:"Download Link",accessor:"name",Cell:function(e){return l.a.createElement("span",{className:"number"},"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.value))}}],U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).uploadFirmware=function(){if(a.state.selectedFile){a.setState({uploadFirmwareLoading:!0});var e=new FormData;e.append("firmare",a.state.selectedFile);g.a.post(k+y,e,{headers:{"content-type":"multipart/form-data"}}).then(function(e){console.log("ki",e),a.setState({uploadFirmwareLoading:!1}),e.data.status?(alert(e.data.message),a.getBlobDetails()):alert(e.data.message)}).catch(function(e){console.log(e),alert("Error in upload"),a.setState({uploadFirmwareLoading:!1})}),document.getElementById("file").value="",a.setState({selectedFile:null})}else alert("Please select a file")},a.getBlobDetails=function(){a.setState({getBlobsLoading:!0}),g()({method:"get",url:k+B}).then(function(e){console.log(e),e.data.status&&a.setState({blobs:e.data.blobs}),a.setState({getBlobsLoading:!1})}).catch(function(e){console.log(e),a.setState({getBlobsLoading:!1})})},a.showBlob=function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement("span",{className:"blob-".concat(t)},"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.name))))},a.handleselectedFile=function(e){e.preventDefault(),a.setState({selectedFile:e.target.files[0]})},a.state={blobs:[],getBlobsLoading:!1,uploadFirmwareLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getBlobDetails()}},{key:"render",value:function(){var e=this.state,t=e.blobs,a=e.getBlobsLoading;return l.a.createElement("div",{className:"container cust-home"},l.a.createElement("label",null,l.a.createElement("b",null,"Firmwares in blob: ")),l.a.createElement(L.a,{data:t,columns:F,loading:a,showPagination:!0,defaultPageSize:3,resizable:!0,sortable:!1,loadingText:"Fetching firmwares..",noDataText:"No Firmwares found.."}),l.a.createElement("div",{className:"upload-container"},l.a.createElement("label",null,l.a.createElement("b",null,"Upload Firmware file to blob: ")),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{id:"file",type:"file",accept:".gz, .zip",onChange:this.handleselectedFile,name:"myFile"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.uploadFirmware},"Upload File")))),l.a.createElement(O,null))}}]),t}(n.Component),V=(a(65),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(m.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:U}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.aea5c1f9.chunk.js.map