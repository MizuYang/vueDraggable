import{D as _}from"./vuedraggable.umd-346c2504.js";import{r as h,i as b,b as v,c as x,e as t,l as g,j as i,k as u,u as p,t as l}from"./index-df6c36c8.js";const y={class:"row pt-5"},f={class:"col-3"},k={class:"text-20 mb-5"},C={class:"list-group-item cursor-move"},j={class:"col-3"},N={class:"text-20 mb-5"},D={class:"list-group-item cursor-move"},B={class:"col-3"},S={class:"px-10",style:{"background-color":"#303030"}},V=t("h3",{class:"text-light text-20 pt-5"},"data1",-1),$={class:"col-3"},w={class:"px-10",style:{"background-color":"#303030"}},J=t("h3",{class:"text-light text-20 pt-5"},"data2",-1),I={__name:"Demo2",setup(K){const o=h([{name:"金獨子",id:1},{name:"劉眾赫",id:2},{name:"韓秀英",id:3},{name:"劉尚雅",id:4}]),n=h([{name:"李賢誠",id:5},{name:"鄭熙媛",id:6},{name:"李吉永",id:7}]);function d(a){const s=o.length+n.length;a.push({name:`新成員${s+1}號`,id:s})}function r(a){console.log("@change",a)}return(a,s)=>{const m=b("highlightjs");return v(),x("div",y,[t("div",f,[t("h3",k,[g(" data1 "),t("button",{type:"button",class:"btn btn-sm btn-secondary",onClick:s[0]||(s[0]=e=>d(o))},"新增")]),i(p(_),{class:"list-group",list:o,group:"people",onChange:r,itemKey:"name"},{item:u(({element:e,index:c})=>[t("div",C,l(c+1)+". "+l(e.name),1)]),_:1},8,["list"])]),t("div",j,[t("h3",N,[g(" data2 "),t("button",{type:"button",class:"btn btn-sm btn-secondary",onClick:s[1]||(s[1]=e=>d(n))},"新增")]),i(p(_),{class:"list-group",list:n,group:"people",onChange:r,itemKey:"name"},{item:u(({element:e,index:c})=>[t("div",D,l(c+1)+". "+l(e.name),1)]),_:1},8,["list"])]),t("div",B,[t("div",S,[V,i(m,{language:"json",code:JSON.stringify(o,null,2)},null,8,["code"])])]),t("div",$,[t("div",w,[J,i(m,{language:"json",code:JSON.stringify(n,null,2)},null,8,["code"])])])])}}};export{I as default};
