(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{7954:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buy",function(){return s(4793)}])},4793:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(5893),n=s(6154),c=s(1664),l=s.n(c),r=s(7294),i=s(5885);function u(){let[e,t]=(0,r.useState)(),[s,c]=(0,r.useState)(),[u,o]=(0,r.useState)();return(0,r.useEffect)(()=>{let e=new i.Z;o(e),c(void 0===e.get("basket")?0:e.get("basket").length),t(void 0===e.get("productsCount")?{}:e.get("productsCount"))},[]),(0,a.jsxs)("div",{className:"App",children:[(0,a.jsx)("button",{className:"contactsFloatingBtn",children:(0,a.jsx)(l(),{href:"/",children:(0,a.jsx)("img",{src:"/imgs/home.svg",alt:"",className:"contactsFloatingBtnImg"})})}),(0,a.jsx)("button",{className:"catFloatingBtn",children:(0,a.jsxs)(l(),{href:"/basket",children:[(0,a.jsx)("img",{src:"/imgs/basket.svg",alt:"",className:"catFloatingBtnImg"}),(0,a.jsx)("div",{className:"catFloatingBtnTextCont",children:(0,a.jsx)("p",{className:"categoryBasketBtnText",children:s})})]})}),void 0===u?null:(0,a.jsx)("div",{className:"cont",children:(0,a.jsxs)("div",{className:"homeContainer",children:[(0,a.jsx)("h1",{className:"homeHeader",children:"Оформление заказа"}),(0,a.jsxs)("p",{className:"buyHeader",children:["Всего: ",u.get("productsPriceSum"),"₽"]}),(0,a.jsxs)("form",{action:"#",onSubmit:function(t){let s=[],a=u.get("basket");a.forEach(t=>{s=s.concat(void 0===e[t]?1:parseInt(e[t]))}),n.Z.get("http://95.174.102.106:7474/buy.php/?products="+a+"&count="+s+"&sum="+u.get("productsPriceSum")+"&fio="+t.target[0].value+"&phone="+t.target[1].value+"&whats="+t.target[2].checked),u.remove("basket"),window.location="/greetings",t.preventDefault()},className:"buyFormCont",children:[(0,a.jsxs)("label",{children:[(0,a.jsx)("p",{className:"buyFormText",children:"ФИО:"}),(0,a.jsx)("input",{type:"text",className:"buyFormInput",required:!0})]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("p",{className:"buyFormText",children:"Телефон(для связи):"}),(0,a.jsx)("input",{type:"text",className:"buyFormInput",required:!0,minLength:11,maxLength:12})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"checkbox",name:"whats",id:"whats",className:"buyCheckbox"}),(0,a.jsx)("label",{htmlFor:"agree",className:"buyCheckboxText",children:"Написать в WhatsApp для оплаты и доставки"}),(0,a.jsx)("p",{className:"buyCheckboxSubText",children:"Если вы не поставите галочку, мы позвоним Вам на телефон"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"checkbox",name:"agree",id:"agree",className:"buyCheckbox",required:!0}),(0,a.jsx)("label",{htmlFor:"agree",className:"buyCheckboxText",children:"Я согласен на обработку данных"})]}),(0,a.jsx)("button",{className:"basketBuyBtn",type:"submit",children:"Оформить"})]})]})})]})}}},function(e){e.O(0,[664,728,774,888,179],function(){return e(e.s=7954)}),_N_E=e.O()}]);