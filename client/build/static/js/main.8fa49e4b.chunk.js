(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(65)},31:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"},57:function(e,t,a){e.exports=a.p+"static/media/refresh.e41d1185.svg"},58:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),s=(a(31),a(6)),c=a(7),i=a(9),u=a(8),m=a(10),d=a(67),p=a(68),E=a(66),f=a(23),b=a(11),g=a.n(b),h=(a(52),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"})),w=h.REACT_APP_VM_SERVER,P=h.REACT_APP_UPDATE_TWIN,_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateTwin=function(e){e.preventDefault();var t=a.state,n=t.softwareVersion,l=t.url;""===n||""===l?alert("Please enter all the fields"):(a.setState({updateTwinLoading:!0}),g()({method:"post",url:w+P,headers:{"Allow-Control-Allow-Origin":"*","Content-Type":"application/json"},data:{software_version:n,url:l}}).then(function(e){console.log(e),a.setState({updateTwinLoading:!1})}).catch(function(e){console.log(e),a.setState({updateTwinLoading:!1})}))},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;"url"===n&&a.setState({url:l}),"softwareVersion"===n&&a.setState({softwareVersion:l})},a.state={softwareVersion:"1.0.0.006",updateTwinLoading:!1,url:"https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.url,a=e.softwareVersion;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.updateTwin},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Software version"),l.a.createElement("input",{type:"software-version",class:"form-control",id:"software",value:a,name:"softwareVersion","aria-describedby":"softwareHelp",placeholder:"Enter software version",onChange:this.handleInput})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Blob URL"),l.a.createElement("input",{type:"text",value:t,name:"url",class:"form-control",id:"blobUrl",placeholder:"Enter Blob URL",onChange:this.handleInput})),l.a.createElement("button",{type:"submit",className:"cust-btn"},"Update twin")))}}]),t}(n.Component),A=(a(54),a(21)),v=a.n(A);var S=function(e){return l.a.createElement(v.a,{percentage:e.percentage,text:e.text,strokeWidth:5,styles:{root:{},path:{stroke:"#2c55ba",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#2c55ba",fontSize:"30px"}}})},T=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"}),R=T.REACT_APP_VM_SERVER,C=T.REACT_APP_GETSTATUS,L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getStatus=function(){a.setState({getFirmwareLoading:!0}),g()({method:"get",url:R+C}).then(function(e){console.log(e),a.setState({firmwareStatuses:[Object(f.a)({},e.data)]}),a.setState({getFirmwareLoading:!1})}).catch(function(e){console.log(e),a.setState({getFirmwareLoading:!1})})},a.showStatus=function(e,t){var a=0;switch(e.otaStatus){case"WaitingForUpdate":a=5;break;case"SoftwareUpdateinProgress":a=15;break;case"SoftwareUpdateComplete":a=25;break;case"DownloadComplete":a=40;break;case"UnzipComplete":a=55;break;case"ReadPackageDataComplete":a=70;break;case"PreInstallComplete":a=85;break;case"InstallComplete":a=100;break;default:a=0}return l.a.createElement("div",{className:"status-container",key:t},l.a.createElement("div",{className:"status-details-container"},l.a.createElement("b",null,"OTA Status: "),l.a.createElement("span",null,e.otaStatus),l.a.createElement("br",null),l.a.createElement("b",null,"Current version: "),l.a.createElement("span",null,e.currentVersion),l.a.createElement("br",null),l.a.createElement("b",null,"Pending Status: "),l.a.createElement("span",null,e.pendingVersion),l.a.createElement("br",null)),l.a.createElement("div",{style:{width:"76px"}},l.a.createElement(S,{percentage:a,text:"".concat(a,"%")})))},a.state={firmwareStatuses:[{otaStatus:"SoftwareUpdateComplete",currentVersion:"1.0.0.006",pendingVersion:""}],getFirmwareLoading:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this,t=this.state,n=t.firmwareStatuses;t.getFirmwareLoading;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row",style:{cursor:"pointer"},"data-toggle":"collapse",href:"#toggleFirmware",role:"button","aria-expanded":"false","aria-controls":"toggleFirmware"},l.a.createElement("img",{className:"img-upload",src:a(56),alt:"...","data-toggle":"modal","data-target":"#showFirmwareDetails"}),l.a.createElement("p",{className:"col-10 upload-text"},"Update firmware"))))),l.a.createElement("div",null,l.a.createElement("div",{className:"collapse multi-collapse",id:"toggleFirmware"},l.a.createElement("div",{className:"card firm-card"},l.a.createElement("div",{className:"card-body"},n.map(function(t,a){return e.showStatus(t,a)})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"cust-btn"},"View Logs"),l.a.createElement("img",{className:"refresh-firm",src:a(57),title:"refresh",alt:"...",onClick:this.getStatus}))))))))}}]),t}(n.Component),O=(a(58),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://13.89.247.19/"})),N=O.REACT_APP_SERVER,B=O.REACT_APP_GETBLOBS,k=O.REACT_APP_UPLOADBLOB,U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).uploadFirmware=function(){if(a.state.selectedFile){a.setState({uploadFirmwareLoading:!0});var e=new FormData;e.append("firmare",a.state.selectedFile);g.a.post(N+k,e,{headers:{"content-type":"multipart/form-data"}}).then(function(e){console.log("ki",e),a.setState({uploadFirmwareLoading:!1}),e.data.status?(alert(e.data.message),a.getBlobDetails()):alert(e.data.message)}).catch(function(e){console.log(e),alert("Error in upload"),a.setState({uploadFirmwareLoading:!1})}),document.getElementById("file").value="",a.setState({selectedFile:null})}else alert("Please select a file")},a.getBlobDetails=function(){a.setState({getBlobsLoading:!0}),g()({method:"get",url:N+B}).then(function(e){console.log(e),e.data.status&&a.setState({blobs:e.data.blobs}),a.setState({getBlobsLoading:!1})}).catch(function(e){console.log(e),a.setState({getBlobsLoading:!1})})},a.showBlob=function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement("span",{className:"blob-".concat(t)},"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.name))))},a.handleselectedFile=function(e){e.preventDefault(),a.setState({selectedFile:e.target.files[0]})},a.state={blobs:[],getBlobsLoading:!1,uploadFirmwareLoading:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getBlobDetails()}},{key:"render",value:function(){var e=this,t=this.state,a=t.blobs,n=t.getBlobsLoading;return l.a.createElement("div",null,l.a.createElement("div",{className:"upload-container"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("b",null,"Select a file:"),"\xa0",l.a.createElement("input",{id:"file",type:"file",accept:".gz, .zip",onChange:this.handleselectedFile,name:"myFile"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.uploadFirmware},"Upload File")))),l.a.createElement("div",{className:"table-container"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Firmware name"),l.a.createElement("th",{scope:"col"},"Download URL"))),l.a.createElement("tbody",null,!n&&a.map(function(t,a){return e.showBlob(t,a)})))),l.a.createElement(L,null))}}]),t}(n.Component),y=(a(60),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:U}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.8fa49e4b.chunk.js.map