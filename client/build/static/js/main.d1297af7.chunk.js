(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(70)},33:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){e.exports=t.p+"static/media/play.1d5f4bfc.svg"},65:function(e,a,t){},67:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(21),o=t.n(r),s=(t(33),t(4)),c=t(5),i=t(7),m=t(6),d=t(8),u=t(72),E=t(73),p=t(71),g=t(12),b=t.n(g),h=(t(54),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getRebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://23.99.213.33/"})),f=h.REACT_APP_AZURE_SERVER,A=h.REACT_APP_LOG,P=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).logMessage=function(e){e.preventDefault();var a=t.state,l=a.deviceID,n=a.message;""===l||""===n?alert("Please enter all the fields"):(t.setState({logging:!0}),b()({method:"post",url:f+A,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{DeviceID:l,Message:n}}).then(function(e){console.log(e),alert("Log registered successfully"),t.setState({logging:!1,deviceID:"",message:""})}).catch(function(e){console.log(e),alert("Error in Logging."),t.setState({logging:!1})}))},t.handleInput=function(e){var a=e.target,l=a.name,n=a.value;"deviceID"===l?t.setState({deviceID:n}):"message"===l&&t.setState({message:n})},t.state={deviceID:"",message:"",logging:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.deviceID,t=e.message,l=e.logging;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.logMessage},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Device ID"),n.a.createElement("input",{type:"text",className:"form-control",id:"deviceID",value:a,name:"deviceID",placeholder:"Enter device ID..",onChange:this.handleInput})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Message"),n.a.createElement("input",{type:"text",value:t,name:"message",className:"form-control",id:"message",placeholder:"Enter message..",onChange:this.handleInput})),n.a.createElement("button",{type:"submit",className:"cust-btn"},l?"Logging..":"Log")))}}]),a}(l.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row update-row"},n.a.createElement("div",{className:"col-6"},n.a.createElement(P,null)),n.a.createElement("div",{className:"col-6"})))}}]),a}(l.Component),_=t(25),T=(t(56),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getRebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://23.99.213.33/"})),v=T.REACT_APP_VM_SERVER,R=T.REACT_APP_UPDATE_TWIN,O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).updateTwin=function(e){e.preventDefault();var a=t.state,l=a.softwareVersion,n=a.url,r=a.reboot;""===l||""===n?alert("Please enter all the fields"):(t.setState({updateTwinLoading:!0}),b()({method:"post",url:v+R,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{software_version:l,url:n,reboot:r}}).then(function(e){console.log(e),alert("Firmware updated successfully"),t.setState({updateTwinLoading:!1})}).catch(function(e){console.log(e),alert("Error in Firmware update"),t.setState({updateTwinLoading:!1})}))},t.handleInput=function(e){var a=e.target,l=a.name,n=a.value;"url"===l&&t.setState({url:n}),"reboot"===l&&t.setState({reboot:n}),"softwareVersion"===l&&t.setState({softwareVersion:n})},t.state={softwareVersion:"1.0.0.006",updateTwinLoading:!1,reboot:"True",url:"https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.url,t=e.softwareVersion,l=e.updateTwinLoading,r=e.reboot;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.updateTwin},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Software version"),n.a.createElement("input",{type:"software-version",className:"form-control",id:"software",value:t,name:"softwareVersion","aria-describedby":"softwareHelp",placeholder:"Enter software version",onChange:this.handleInput})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Blob URL"),n.a.createElement("input",{type:"text",value:a,name:"url",className:"form-control",id:"blobUrl",placeholder:"Enter Blob URL",onChange:this.handleInput})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"rebootType"},"Reboot"),n.a.createElement("select",{className:"form-control",id:"rebootType",value:r,name:"reboot",onChange:this.handleInput},n.a.createElement("option",null,"True"),n.a.createElement("option",null,"False"))),n.a.createElement("button",{type:"submit",className:"cust-btn"},l?"Updating Firmware..":"Update firmware")))}}]),a}(l.Component),C=(t(58),t(22)),S=t.n(C);var N=function(e){return n.a.createElement(S.a,{percentage:e.percentage,text:e.text,strokeWidth:5,styles:{root:{},path:{stroke:"#2c55ba",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#2c55ba",fontSize:"30px"}}})},L=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getRebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://23.99.213.33/"}),y=L.REACT_APP_VM_SERVER,j=L.REACT_APP_GETSTATUS,B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).getStatus=function(){t.setState({getFirmwareLoading:!0}),b()({method:"get",url:y+j}).then(function(e){console.log(e),t.setState({firmwareStatuses:[Object(_.a)({},e.data)]}),t.setState({getFirmwareLoading:!1})}).catch(function(e){console.log(e),t.setState({getFirmwareLoading:!1})})},t.showStatus=function(e,a){var t=0;switch(e.otaStatus){case"WaitingForUpdate":t=5;break;case"SoftwareUpdateinProgress":t=15;break;case"DownloadComplete":t=25;break;case"UnzipComplete":t=40;break;case"ReadPackageDataComplete":t=55;break;case"PreInstallComplete":t=70;break;case"InstallComplete":t=85;break;case"SoftwareUpdateComplete":t=100;break;default:t=0}return n.a.createElement("div",{className:"status-container",key:a},n.a.createElement("div",{className:"status-details-container"},n.a.createElement("b",null,"OTA Status: "),n.a.createElement("span",null,e.otaStatus),n.a.createElement("br",null),n.a.createElement("b",null,"Current version: "),n.a.createElement("span",null,e.currentVersion),n.a.createElement("br",null),n.a.createElement("b",null,"Pending Status: "),n.a.createElement("span",null,e.pendingVersion),n.a.createElement("br",null)),n.a.createElement("div",{style:{width:"76px"}},n.a.createElement(N,{percentage:t,text:"".concat(t,"%")})))},t.state={firmwareStatuses:[],getFirmwareLoading:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this,a=this.state,l=a.firmwareStatuses,r=a.getFirmwareLoading;return n.a.createElement("div",null,n.a.createElement("div",{className:"row update-row"},n.a.createElement("div",{className:"col-6"},n.a.createElement(O,null)),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header toggle-card",id:"headingOne"},n.a.createElement("div",{className:"row",style:{cursor:"pointer"},"data-toggle":"collapse","data-target":"#toggleFirmware",role:"button","aria-expanded":"false","aria-controls":"toggleFirmware"},n.a.createElement("img",{className:"img-upload",src:t(60),alt:"...","data-toggle":"modal","data-target":"#showFirmwareDetails"}),n.a.createElement("p",{className:"col-10 upload-text"},"Status"))),n.a.createElement("div",null,n.a.createElement("div",{className:"collapse multi-collapse",id:"toggleFirmware"},n.a.createElement("div",{className:"card firm-card"},n.a.createElement("div",{className:"card-body"},l.length?l.map(function(a,t){return e.showStatus(a,t)}):n.a.createElement("p",{style:{textAlign:"center"}},"No records found")),n.a.createElement("div",{className:"toogle-footer"},n.a.createElement("button",{type:"button",className:"cust-btn"},"View Logs"),n.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.getStatus},r?"Refreshing..":"Refresh"))))))))))}}]),a}(l.Component),D=t(24),k=(t(63),t(65),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"updatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getRebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"http://23.99.213.33/"})),F=k.REACT_APP_SERVER,U=k.REACT_APP_GETBLOBS,I=k.REACT_APP_UPLOADBLOB,V=[{Header:"Name",accessor:"name"},{Header:"Download Link",resizable:!0,accessor:"name",Cell:function(e){return n.a.createElement("a",{href:"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.value)},"Link")}},{Header:"Date",accessor:"lastModified"}],x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).uploadFirmware=function(){if(t.state.selectedFile){t.setState({uploadFirmwareLoading:!0});var e=new FormData;e.append("firmare",t.state.selectedFile);b.a.post(F+I,e,{headers:{"content-type":"multipart/form-data"}}).then(function(e){console.log("ki",e),t.setState({uploadFirmwareLoading:!1}),e.data.status?(alert(e.data.message),t.getBlobDetails()):alert(e.data.message)}).catch(function(e){console.log(e),alert("Error in upload"),t.setState({uploadFirmwareLoading:!1})}),document.getElementById("file").value="",t.setState({selectedFile:null})}else alert("Please select a file")},t.getBlobDetails=function(){t.setState({getBlobsLoading:!0}),b()({method:"get",url:F+U}).then(function(e){console.log(e),e.data.status&&t.setState({blobs:e.data.blobs}),t.setState({getBlobsLoading:!1})}).catch(function(e){console.log(e),t.setState({getBlobsLoading:!1})})},t.handleselectedFile=function(e){e.preventDefault(),t.setState({selectedFile:e.target.files[0]})},t.state={blobs:[],getBlobsLoading:!1,uploadFirmwareLoading:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.getBlobDetails()}},{key:"render",value:function(){var e=this.state,a=e.blobs,t=e.getBlobsLoading;return n.a.createElement("div",null,n.a.createElement(D.a,{data:a,columns:V,pageSizeOptions:[3],loading:t,showPagination:!0,defaultPageSize:3,width:170,loadingText:"Fetching firmwares..",noDataText:"No Firmwares found.."}),n.a.createElement("div",{className:"upload-container"},n.a.createElement("label",null,n.a.createElement("b",null,"Upload Firmware file to blob: ")),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"custom-file"},n.a.createElement("input",{id:"file",type:"file",accept:".gz, .zip",onChange:this.handleselectedFile,name:"myFile"}),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.uploadFirmware},"Upload File")))))}}]),a}(l.Component),G=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container cust-home"},n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header custom-header",id:"headingOne"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{color:"white"}},n.a.createElement("span",{className:"fa fa-tasks"}),n.a.createElement("label",null,n.a.createElement("b",null,"\xa0\xa0Firmwares in blob: ")),n.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),n.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},n.a.createElement("div",{className:"card-body"},n.a.createElement(x,null)))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header custom-header",id:"headingTwo"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{color:"white"}},n.a.createElement("span",{className:"fa fa-spinner"}),n.a.createElement("label",null,n.a.createElement("b",null,"\xa0\xa0Firmware status: ")),n.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),n.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},n.a.createElement("div",{className:"card-body"},n.a.createElement(B,null)))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header custom-header",id:"headingThree"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{color:"white"}},n.a.createElement("span",{className:"fa fa-desktop"}),n.a.createElement("label",null,n.a.createElement("b",null,"\xa0\xa0Reboot status and logs: ")),n.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),n.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample"},n.a.createElement("div",{className:"card-body"},n.a.createElement(w,null)))))))}}]),a}(l.Component),M=(t(67),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p.a,null,n.a.createElement(u.a,null,n.a.createElement(E.a,{exact:!0,path:"/",component:G}))))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.d1297af7.chunk.js.map