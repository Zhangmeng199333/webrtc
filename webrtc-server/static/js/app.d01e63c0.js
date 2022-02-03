(function(e){function r(r){for(var t,c,s=r[0],a=r[1],u=r[2],m=0,l=[];m<s.length;m++)c=s[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&l.push(n[c][0]),n[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);d&&d(r);while(l.length)l.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,r=0;r<i.length;r++){for(var o=i[r],t=!0,s=1;s<o.length;s++){var a=o[s];0!==n[a]&&(t=!1)}t&&(i.splice(r--,1),e=c(c.s=o[0]))}return e}var t={},n={app:0},i=[];function c(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,r,o){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(o,t,function(r){return e[r]}.bind(null,t));return o},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(e,r,o){e.exports=o("56d7")},"034f":function(e,r,o){"use strict";o("64a9")},1:function(e,r){},"56d7":function(e,r,o){"use strict";o.r(r);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),n=o("5c96"),i=o.n(n),c=(o("0fae"),function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app"}},[o("Room")],1)}),s=[],a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"m-room-wrapper"},[e.canSupportVideo?o("div",{staticClass:"can-support-rtc"},[e.showFormArea?o("div",{staticClass:"form-area"},[o("el-form",{ref:"roomForm",staticClass:"room-form",attrs:{model:e.roomForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"房间ID",prop:"roomId"}},[o("el-input",{attrs:{disabled:!e.canClickBtn},model:{value:e.roomForm.roomId,callback:function(r){e.$set(e.roomForm,"roomId","string"===typeof r?r.trim():r)},expression:"roomForm.roomId"}})],1),o("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[o("el-input",{attrs:{disabled:!e.canClickBtn},model:{value:e.roomForm.userName,callback:function(r){e.$set(e.roomForm,"userName","string"===typeof r?r.trim():r)},expression:"roomForm.userName"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",disabled:!e.canClickBtn},on:{click:e.submitForm}},[e._v("加入房间")]),o("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1):e._e(),e.showFormArea?e._e():o("div",{staticClass:"list-area"},[o("h2",[e._v("当前房间id: "+e._s(e.roomForm.roomId)+" ")]),o("h2",[e._v("在线人数: "+e._s(e.roomUsers.length)+" ")]),o("el-card",{staticClass:"box-card"},e._l(e.roomUsers,(function(r){return o("div",{key:r.sockId,staticClass:"item"},[e._v("\n                "+e._s(r.userName)+"\n            ")])})),0),e.roomUsers.length>1&&e.sockId?o("el-button",{attrs:{type:"primary"},on:{click:e.toSendVideo}},[e._v("\n            发起视频\n        ")]):e._e()],1)]):o("div",[o("h1",[e._v("当前域名的浏览器不支持WebRTC！")])])])},u=[],d=(o("ac6a"),o("7f7f"),o("96cf"),o("3b8d")),m=o("7618"),l=(o("7514"),o("8055")),f=o.n(l),p="localhost:3000",h=f.a.connect(p),v=h,I={name:"Room",created:function(){this.canSupportWebRTC()&&(this.initSocketEvents(),this.initVIDEO_VIEWSdk())},data:function(){var e=function(e,r,o){var t=/^\d{1,4}$/;if(!t.test(r))return o(new Error("房间ID只能为1-4位的数字"));o()},r=function(e,r,o){var t=/^[\u4e00-\u9fa5a-zA-Z-z]{1,10}$/;if(!t.test(r))return o(new Error("请输入合法的姓名"));o()};return{showFormArea:!0,roomForm:{roomId:"",userName:""},rules:{roomId:[{required:!0,message:"请输入房间ID",trigger:["blur","change"]},{validator:e,trigger:["blur","change"]}],userName:[{required:!0,message:"请输入姓名",trigger:["blur","change"]},{validator:r,trigger:["blur","change"]}]},canClickBtn:!0,sockId:"",roomUsers:[],canSupportVideo:!1,localStream:null,peer:null,peerConfigs:{},offerOption:{offerToReceiveAudio:1,offerToReceiveVideo:1}}},computed:{user:function(){return Object.assign({},{sockId:this.sockId},this.roomForm)},receiveUser:function(){var e=this;return this.roomUsers.find((function(r){return r.sockId!==e.sockId}))}},methods:{canSupportWebRTC:function(){return"object"!==Object(m["a"])(navigator.mediaDevices)?(this.$message.error("No navigator.mediaDevices"),!1):"function"!==typeof navigator.mediaDevices.enumerateDevices?(this.$message.error("No navigator.mediaDevices.enumerateDevices"),!1):"function"!==typeof navigator.mediaDevices.getUserMedia?(this.$message.error("No navigator.mediaDevices.getUserMedia"),!1):(this.canSupportVideo=!0,this.getDevices(),!0)},getDevices:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:r=e.sent,VIDEO_VIEW.showDevicesNameByDevices(r),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0),o="getDevices error: ".concat(e.t0.name," : ").concat(e.t0.message),this.$message.error(o);case 12:case"end":return e.stop()}}),e,this,[[0,7]])})));function r(){return e.apply(this,arguments)}return r}(),initSocketEvents:function(){var e=this;window.onbeforeunload=function(){v.emit("userLeave",{userName:e.roomForm.userName,sockId:e.sockId,roomId:e.roomForm.roomId})},v.on("connectionSuccess",(function(r){e.sockId=r,console.log("connectionSuccess client sockId:",r)})),v.on("checkRoomSuccess",(function(r){e.canClickBtn=!0,r&&r.length>1?e.$message.info("当前房间人数已满~请换个房间id"):(e.showFormArea=!1,e.roomUsers=[{userName:e.roomForm.userName+"(我)",sockId:e.sockId,roomId:e.roomForm.roomId}])})),v.on("joinRoomSuccess",(function(r){console.log("joinRoomSuccess client user:",r);var o=r.find((function(r){return r.sockId!==e.sockId}));if(!o)return!1;e.$message.success("".concat(o.userName,"加入了房间")),e.roomUsers=[o,{userName:e.roomForm.userName+"(我)",sockId:e.sockId,roomId:e.roomForm.roomId}]})),v.on("userLeave",(function(r){console.log("userLeave client user:",r),r.length||(e.showFormArea=!0,e.sockId="");var o=r.map((function(e){return e.sockId}));e.roomUsers.forEach((function(r){-1===o.indexOf(r.sockId)&&(e.$message.info("".concat(r.userName,"离开了房间")),r.sockId===e.sockId&&(e.showFormArea=!0,e.sockId=""))})),e.roomUsers=r,e.roomUsers.forEach((function(r){r.sockId===e.sockId&&(r.userName=r.userName+"(我)")})),VIDEO_VIEW.hideAllVideoModal()})),v.on("disconnect",(function(r){e.showFormArea=!0,e.sockId="",console.log("client sock disconnect:",r),v.emit("userLeave",e.user),VIDEO_VIEW.hideAllVideoModal()})),v.on("cancelSendVideo",(function(r){var o=r.sockId===e.sockId?"您取消了发送视频":"对方取消了发送视频";e.$message.info(o),VIDEO_VIEW.hideAllVideoModal()})),v.on("receiveVideo",(function(r){if(e.user.sockId===r.sockId)return!1;VIDEO_VIEW.showReceiveVideoModalBySender(r)})),v.on("rejectReceiveVideo",(function(r){var o=r.sockId===e.sockId?"您拒绝了接收视频":"对方拒绝了接收视频";e.$message.info(o),VIDEO_VIEW.hideAllVideoModal()})),v.on("answerVideo",function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(o){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return VIDEO_VIEW.showInvideoModal(),r.next=3,e.createLocalVideoStream();case 3:if(t=r.sent,e.localStream=t,document.querySelector("#echat-local").srcObject=e.localStream,e.peer=new RTCPeerConnection,console.log(e.peer),e.initPeerListen(),e.peer.addStream(e.localStream),o.sockId!==e.sockId){r.next=13;break}r.next=19;break;case 13:return r.next=15,e.peer.createOffer(e.offerOption);case 15:return n=r.sent,r.next=18,e.peer.setLocalDescription(n);case 18:v.emit("receiveOffer",{user:e.user,offer:n});case 19:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),v.on("hangupVideo",(function(r){var o=r.sockId===e.sockId?"您挂断了视频":"对方挂断了视频";e.$message.info(o),e.peer.close(),e.peer=null,VIDEO_VIEW.hideAllVideoModal(),document.querySelector("#echat-remote-1").srcObject=null,document.querySelector("#echat-local").srcObject=null})),v.on("addIceCandidate",function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(o){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.peer.addIceCandidate(o);case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),v.on("receiveOffer",function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(o){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.peer.setRemoteDescription(o);case 2:return r.next=4,e.peer.createAnswer();case 4:return t=r.sent,r.next=7,e.peer.setLocalDescription(t);case 7:v.emit("receiveAnsewer",{answer:t,user:e.user});case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),v.on("receiveAnsewer",(function(r){e.peer.setRemoteDescription(r)}))},submitForm:function(){var e=this;if(!this.sockId)return this.$message.error("socket未连接成功,请刷新再尝试!"),window.location.reload(),!1;this.$refs.roomForm.validate((function(r){r?(e.canClickBtn=!1,v.emit("checkRoom",{roomId:e.roomForm.roomId,sockId:e.sockId,userName:e.roomForm.userName})):console.log("error submit!!")}))},resetForm:function(){this.$refs.roomForm.resetFields(),this.roomForm.roomId="",this.roomForm.userName=""},toSendVideo:function(){v.emit("toSendVideo",this.user),VIDEO_VIEW.showStartVideoModalByReceiver(this.receiveUser)},initVIDEO_VIEWSdk:function(){var e={startVideoCancelCb:this.startVideoCancelCb,receiveVideoCancelCb:this.receiveVideoCancelCb,receiveVideoAnswerCb:this.receiveVideoAnswerCb,hangUpVideoCb:this.hangUpVideoCb,openMikeCb:this.openMikeCb,closeMikeCb:this.closeMikeCb,openCammerCb:this.openCammerCb,closeCammerCb:this.closeCammerCb,toScreenCb:this.toScreenCb};VIDEO_VIEW.configCallBack(e)},startVideoCancelCb:function(){v.emit("cancelSendVideo",this.user),VIDEO_VIEW.hideAllVideoModal()},receiveVideoCancelCb:function(){v.emit("rejectReceiveVideo",this.user),VIDEO_VIEW.hideAllVideoModal()},receiveVideoAnswerCb:function(){v.emit("answerVideo",this.user)},hangUpVideoCb:function(){v.emit("hangupVideo",this.user)},openMikeCb:function(){},closeMikeCb:function(){},openCammerCb:function(){},closeCammerCb:function(){},toScreenCb:function(){},createLocalVideoStream:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={audio:!0,video:!0},e.next=3,navigator.mediaDevices.getUserMedia(r);case 3:return o=e.sent,console.log("localStream:",o),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));function r(){return e.apply(this,arguments)}return r}(),initPeerListen:function(){var e=this;this.peer.onicecandidate=function(r){r.candidate&&v.emit("addIceCandidate",{candidate:r.candidate,user:e.user})},this.peer.onaddstream=function(e){document.querySelector("#echat-remote-1").srcObject=e.stream},this.peer.onclose=function(){}}}},b=I,g=(o("79d1"),o("2877")),k=Object(g["a"])(b,a,u,!1,null,null,null),V=k.exports,C={name:"app",components:{Room:V}},w=C,O=(o("034f"),Object(g["a"])(w,c,s,!1,null,null,null)),S=O.exports;t["default"].use(i.a),t["default"].config.productionTip=!1,new t["default"]({render:function(e){return e(S)}}).$mount("#app")},"64a9":function(e,r,o){},6785:function(e,r,o){},"79d1":function(e,r,o){"use strict";o("6785")}});
//# sourceMappingURL=app.d01e63c0.js.map