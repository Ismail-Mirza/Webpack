(()=>{"use strict";class t{constructor(t,e,s=3e3){this.txtElement=t,this.words=e,this.txt="",this.wordIndex=0,this.wait=parseInt(s,10),this.type(),this.isDeleting=!1}type(){const t=this.wordIndex%this.words.length,e=this.words[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;let s=300;this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,s=500):(s=this.wait,this.isDeleting=!0),setTimeout((()=>this.type()),500)}}const e=document.querySelector("#sign-in-btn"),s=document.querySelector("#sign-up-btn"),i=document.querySelector(".container");function n(t,e){return Math.floor(Math.random()*(e-t)+t)}s.addEventListener("click",(()=>{i.classList.add("sign-up-mode")})),e.addEventListener("click",(()=>{i.classList.remove("sign-up-mode")}));var r=["img/log_2.svg","img/sec_log.svg","img/log.svg"];console.log(r),setInterval((function(){var t=document.querySelector("#log-img");const e=n(0,r.length);t.setAttribute("src",r[e])}),1e4);var o=["img/register_say.svg","img/register_code.svg","img/register.svg"];setInterval((function(){var t=document.querySelector("#reg-svg");const e=n(0,o.length);t.setAttribute("src",o[e])}),1e4),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".txt-type"),s=JSON.parse(e.getAttribute("data-words")),i=e.getAttribute("data-wait");new t(e,s,i)}))})();