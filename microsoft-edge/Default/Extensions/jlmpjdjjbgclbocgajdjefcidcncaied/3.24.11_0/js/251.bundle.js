(self.webpackChunkextension=self.webpackChunkextension||[]).push([[251],{65786:(e,t,n)=>{"use strict";function r(e,t){const n=function(e){a[e]||(a[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}));return a[e]}(t);return n.formatToParts?function(e,t){const n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){const{type:t,value:a}=n[e],u=i[t];u>=0&&(r[u]=parseInt(a,10))}return r}(n,e):function(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),[,i,a,u,o,l,s]=r;return[u,i,a,o,l,s]}(n,e)}n.d(t,{Z:()=>H});const i={year:0,month:1,day:2,hour:3,minute:4,second:5};const a={};var u=36e5,o={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/,timezoneIANA:/(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function l(e,t){var n,i,a;if(n=o.timezoneZ.exec(e))return 0;if(n=o.timezoneHH.exec(e))return s(a=parseInt(n[2],10))?(i=a*u,"+"===n[1]?-i:i):NaN;if(n=o.timezoneHHMM.exec(e)){a=parseInt(n[2],10);var l=parseInt(n[3],10);return s(a,l)?(i=a*u+6e4*l,"+"===n[1]?-i:i):NaN}if(n=o.timezoneIANA.exec(e)){var[c,f,d,m,g,D]=r(t,e);return-(Date.UTC(c,f-1,d,m,g,D)-(t.getTime()-t.getTime()%1e3))}return 0}function s(e,t){return null==t||!(t<0||t>59)}var c=n(91218),f=n(82084),d=n.n(f),m=n(93561),g=n.n(m),D=36e5,p={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function v(e){var t,n={},r=e.split(p.dateTimeDelimeter);if(p.plainTime.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],n.timezone=r[2],p.timeZoneDelimeter.test(n.date)&&(n.date=e.split(p.timeZoneDelimeter)[0],t=e.substr(n.date.length,e.length))),t){var i=p.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function N(e,t){var n,r=p.YYY[t],i=p.YYYYY[t];if(n=p.YYYY.exec(e)||i.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=p.YY.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}function w(e,t){if(null===t)return null;var n,r,i,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=p.MM.exec(e))return r=new Date(0),Z(t,i=parseInt(n[1],10)-1)?(r.setUTCFullYear(t,i),r):new Date(NaN);if(n=p.DDD.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return function(e,t){if(t<1)return!1;var n=M(e);if(n&&t>366)return!1;if(!n&&t>365)return!1;return!0}(t,u)?(r.setUTCFullYear(t,0,u),r):new Date(NaN)}if(n=p.MMDD.exec(e)){r=new Date(0),i=parseInt(n[1],10)-1;var o=parseInt(n[2],10);return Z(t,i,o)?(r.setUTCFullYear(t,i,o),r):new Date(NaN)}if(n=p.Www.exec(e))return y(t,a=parseInt(n[1],10)-1)?T(t,a):new Date(NaN);if(n=p.WwwD.exec(e)){a=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return y(t,a,l)?T(t,a,l):new Date(NaN)}return null}function Y(e){var t,n,r;if(t=p.HH.exec(e))return z(n=parseFloat(t[1].replace(",",".")))?n%24*D:NaN;if(t=p.HHMM.exec(e))return z(n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")))?n%24*D+6e4*r:NaN;if(t=p.HHMMSS.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return z(n,r,i)?n%24*D+6e4*r+1e3*i:NaN}return null}function T(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var i=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+i),r}var h=[31,28,31,30,31,30,31,31,30,31,30,31],x=[31,29,31,30,31,30,31,31,30,31,30,31];function M(e){return e%400==0||e%4==0&&e%100!=0}function Z(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var r=M(e);if(r&&n>x[t])return!1;if(!r&&n>h[t])return!1}return!0}function y(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function z(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}function H(e,t,n){const r=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},r=null==n.additionalDigits?2:d()(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i=v(e),a=N(i.date,r),u=a.year,o=w(a.restDateString,u);if(isNaN(o))return new Date(NaN);if(o){var s,c=o.getTime(),f=0;if(i.time&&(f=Y(i.time),isNaN(f)))return new Date(NaN);if(i.timezone||n.timeZone){if(s=l(i.timezone||n.timeZone,new Date(c+f)),isNaN(s))return new Date(NaN)}else s=g()(new Date(c+f)),s=g()(new Date(c+f+s));return new Date(c+f+s)}return new Date(NaN)}(e,n),i=new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds()),a=l(t,r);return a?(0,c.Z)(i,a):i}},93561:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()},e.exports=t.default},82084:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},51820:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(83946),i=n(19013),a=n(13882);function u(e,t){(0,a.Z)(2,arguments);var n=(0,i.Z)(e).getTime(),u=(0,r.Z)(t);return new Date(n+u)}},91218:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(83946),i=n(51820),a=n(13882);function u(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(t);return(0,i.Z)(e,-n)}},64689:(e,t,n)=>{var r,i;void 0===(i="function"==typeof(r=function(){"use strict";const t=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:4,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:10}],n=(e,n=t,r="!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~")=>{let i=e||"";n[0].minDiversity=0,n[0].minLength=0;const a=[{regex:"[a-z]",message:"lowercase"},{regex:"[A-Z]",message:"uppercase"},{regex:"[0-9]",message:"number"}];r&&a.push({regex:`[${r}]`,message:"symbol"});let u={};u.contains=a.filter((e=>new RegExp(`${e.regex}`).test(i))).map((e=>e.message)),u.length=i.length;let o=n.filter((e=>u.contains.length>=e.minDiversity)).filter((e=>u.length>=e.minLength)).sort(((e,t)=>t.id-e.id)).map((e=>({id:e.id,value:e.value})));return Object.assign(u,o[0]),u};e.exports={passwordStrength:n,defaultOptions:t}})?r.call(t,n,t,e):r)||(e.exports=i)}}]);