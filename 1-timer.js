import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f}from"./assets/vendor-BbbuE1sJ.js";let o=null,i=null;const n=document.querySelector("button[data-start]");document.querySelector(".timer");const u=document.getElementById("datetime-picker"),p=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(l){o=l[0],console.log("Selected Date:",o.getTime()),t.checkDate()}};f("#datetime-picker",b);class t{constructor(){}static checkDate(){o.getTime()<Date.now()?(alert("Please choose a date in the future"),n.disabled=!0):n.disabled=!1}static start(){n.disabled=!0,u.disabled=!0,i=setInterval(()=>{const e=Date.now(),a=o.getTime()-e;if(a<=0){clearInterval(i),u.disabled=!1,n.disabled=!1;return}const{days:r,hours:d,minutes:c,seconds:s}=t.convertMs(a);p.textContent=t.addLeadingZero(r),D.textContent=t.addLeadingZero(d),g.textContent=t.addLeadingZero(c),S.textContent=t.addLeadingZero(s)},1e3)}static convertMs(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:y,seconds:h}}static addLeadingZero(e){return String(e).padStart(2,"0")}}n.addEventListener("click",t.start.bind(t));
//# sourceMappingURL=1-timer.js.map
