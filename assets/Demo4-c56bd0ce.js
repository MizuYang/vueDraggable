import{a as l,p as m,b as A,c as _,e,i,j as v,u as c,q as g,t as x,w as B,s as b}from"./index-6884f879.js";import{D as f}from"./vuedraggable.umd-f28e2e0a.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB6UlEQVR4nO3W4W3bMBRF4csNuEmZCcpMEHWiqhNFniDPE4TdxCP0PLACZEMyZLUQ4UAH+PTvGnkxDDvoyTsOaN1xQOuOA1p3HNC6pQMS3pBVM0knFKwpYdxfULB175kW9rcHRLwjaz6T9AMXzBWx6356QMQHEu5V8IoLpkXsvg8Y83HWukz1RaY12Qd4CZ94pBcUeAlN9uMBvaSfeKRf6FXr1WgfeHgm6Tse6YQOnmn//Rk58PBMj7/Av/4B/2U/HtBr41uoWq9G+8DDS9j0IYKX0GQ/HuCZ1r+NZ2RdZ2qwDxiLMEnfcK/fyPr7RTIpwrTzfnqAFzFg6T9xRocL5ooYsNs+YK6EDglewYCCNSV0yKqZtu0TvIIBBVctHfA0fdkDEt6QVTPVL46CNSXssr89IOIdWfOZbn6P3xSx6356QMQHEu5V8IoLpkXsvg8Y83HWukz1RaY12Qd4CZ94pBcUeAlN9uMBvTb+mFKtV6N94OGZlr/9ljqhg2dqtP8yB/Ta+Baq1qvRPvDwEjZ9iOAlNNmPB3im9W/jGVnXmRrsA8YiTA/+Hp8UYdp5Pz3Aixiw9J84o8MFc0UM2G0fMFdCh6yaqb5wwZoSOmTVTNv2CV7BgIKrlg54mo4DWncc0LrjgNYdB7TuD2sBzTEyi8rWAAAAAElFTkSuQmCC";const k={class:"row"},y={class:"col-7"},C=e("h3",{class:"text-18 mb-5"},"使用 icon 拖曳",-1),D={class:"list-group-item"},T={class:"text d-inline-block ms-4 my-0",style:{transform:"translateY(-4px)"}},w=["onUpdate:modelValue"],N={class:"position-absolute top-0 end-0 m-2"},M=["onClick"],Q={__name:"Demo4",setup(V){const t=l([{name:"Mizu",text:"",id:0},{name:"金獨子",text:"",id:1},{name:"劉眾赫",text:"",id:2}]),s=l(0);function r(o){t.value.splice(o,1)}function u(){s.value++,t.value.push({name:"Juan "+s.value,id:s,text:""})}return(o,E)=>{const d=m("rawDisplayer");return A(),_("div",k,[e("div",{class:"col-1"},[e("button",{class:"btn btn-secondary button",onClick:u},"Add")]),e("div",y,[C,i(c(f),{tag:"ul",list:t.value,class:"list-group",handle:".dragIcon","item-key":"name"},{item:v(({element:a,index:p})=>[e("li",D,[e("span",{draggable:"",class:"cursor-move dragIcon",style:g([{width:"20px",height:"20px",display:"inline-block"},[`background-image:url(${c(h)});`,"background-repeat: no-repeat;","background-size: cover;"]])},null,4),e("span",T,x(a.name),1),B(e("input",{type:"text",class:"form-control","onUpdate:modelValue":n=>a.text=n},null,8,w),[[b,a.text]]),e("div",N,[e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>r(p)},null,8,M)])])]),_:1},8,["list"])]),i(d,{class:"col-3",value:t.value,title:"List"},null,8,["value"])])}}};export{Q as default};