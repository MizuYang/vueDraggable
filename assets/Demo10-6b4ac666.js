import{D as _}from"./vuedraggable.umd-f28e2e0a.js";import p from"./Code-26c2533c.js";import{a as n,b as v,c as g,e,i as r,j as l,u as b,t as f}from"./index-6884f879.js";const h={class:"row"},k={class:"col-8"},x=e("h3",{class:"text-18 mb-10"},"Header slot",-1),y={class:"row"},C={class:"col-6"},D={class:"list-group-item item"},$={class:"col-6"},S={__name:"Demo10",setup(w){const o=n(1),s=n([{name:"金獨子 1",id:0},{name:"劉眾赫 2",id:1},{name:"韓秀英 3",id:2}]),i=n(!1),d=()=>{s.value.push({name:`未知人物 ${o.value}`,id:o.value++})},u=()=>{s.value=[{name:"特斯拉又來了",id:o.value++}]},m=c=>{console.log(c)};return(c,t)=>(v(),g("div",h,[e("div",k,[x,e("div",y,[e("div",C,[r(b(_),{list:s.value,class:"list-group",animation:100,onStart:t[0]||(t[0]=a=>i.value=!0),onEnd:t[1]||(t[1]=a=>i.value=!1),onChange:m,"item-key":"name"},{header:l(()=>[e("div",{class:"btn-group list-group-item",role:"group"},[e("button",{class:"btn btn-secondary",onClick:d},"Add")])]),footer:l(()=>[e("div",{class:"btn-group list-group-item",role:"group"},[e("button",{class:"btn btn-secondary",onClick:u},"Replace")])]),item:l(({element:a})=>[e("div",D,f(a.name),1)]),_:1},8,["list"])]),e("div",$,[r(p,{code:s.value},null,8,["code"])])])])]))}};export{S as default};
