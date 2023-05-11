"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[887],{46402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(35776),a=n(27052),l=n(84558),o=n(26990),i=n(52250),u=n(94184),s=n.n(u),c=n(86037),d=n(38577);const f=function(e){let t=e.max,n=e.active,a=e.className,l=void 0===a?{}:a,o=e.onItemClick;const i=(0,r.useMemo)((()=>Array(t).fill(null)),[t]);return r.default.createElement("span",{className:s()("flex flex-row gap-1 items-center",l.container)},i.map(((e,t)=>r.default.createElement("button",{key:t,type:"button","aria-label":`carousel item #${t+1}`,onClick:()=>o(t),className:s()("w-1.5 h-1.5 rounded-full border border-theme-color-salt",n===t&&"bg-theme-color-salt",l.item)}))))};function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const y=function(e){let t=e.items,n=e.className,a=void 0===n?{}:n,l=e.preSelectedIndex,o=void 0===l?0:l,i=e.hasCustomIndicator,u=void 0!==i&&i,p=e.onScreenIndexChange,y=e.onClose,v=e.onEnd,h=e.children;const g=b((0,r.useState)(o),2),w=g[0],E=g[1],S=e=>(null==p||p(w+e),E((t=>t+e))),C=e=>{var t,n;return null==e||null===(t=e.event)||void 0===t||null===(n=t.stopPropagation)||void 0===n||n.call(t),0===w?(0,d.le)(null==e?void 0:e.dir)&&(null==y?void 0:y(e)):S(-1)},O=e=>{var n,r;null==e||null===(n=e.event)||void 0===n||null===(r=n.stopPropagation)||void 0===r||r.call(n);const a=t.length-1;return w===a?(0,d.le)(null==e?void 0:e.dir)&&(null==v?void 0:v(e)):S(1)},x=(0,c.useSwipeable)({onSwipedLeft:O,onSwipedRight:C}),N=r.default.createElement(f,{onItemClick:S,max:t.length,active:w,className:{container:!h&&"absolute bottom-4 left-1/2 -translate-x-1/2"}}),j=r.default.createElement("span",m({},x,{className:s()("relative flex flex-row overflow-x-hidden",null==a?void 0:a.container,h?"w-[inherit]":null==a?void 0:a.wrapper)}),t.map(((e,t)=>r.default.createElement("span",{key:t,style:{transform:`translateX(${100*-w}%)`},className:s()("w-[inherit] transform ease-in-out duration-500",null==a?void 0:a.item)},e))),!u&&N);return h?r.default.createElement("div",{className:s()("flex flex-col",null==a?void 0:a.wrapper)},j,null==h?void 0:h({onSwipedLeft:O,onSwipedRight:C,index:w},N)):j};var v=n(36641),h=n(77295);const g=function(e){let t=e.banner,n=e.title,a=e.description,l=e.badge,o=e.className;return r.default.createElement(i.Ht,{className:null==o?void 0:o.container},r.default.createElement(i.bA,{className:"h-80 bg-gradient-to-l from-cabbage-90 to-cabbage-50"},r.default.createElement("img",{className:s()("w-full max-w-[23.5rem] pt-14",null==o?void 0:o.banner),src:t,alt:`${n} banner`})),r.default.createElement(i.Ht,{className:"p-6"},r.default.createElement("h3",{className:s()("flex flex-row items-center font-bold",a?"typo-title3":"typo-title1")},l&&r.default.createElement(h.C,null,l),n),a&&r.default.createElement("p",{className:"mt-2 typo-body text-theme-label-secondary"},a)))};var w=n(32256),E=n(88767),S=n(52275);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const N="squadTourKey",j=()=>{const e=(0,E.useQueryClient)(),t=(0,E.useQuery)(N,(()=>e.getQueryData(N)),{initialData:{tourIndex:-1}}).data,n=(0,S.o)({key:S.Y.ShareSquadPost}),a=t=>e.setQueryData(N,(e=>O(O({},e),{},{tourIndex:t}))),l=()=>{a(-1),n.isCompleted||n.activate()};return(0,r.useMemo)((()=>O(O({},t),{},{onCloseTour:l,onTourIndexChange:a})),[t,n])};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const P=(0,w.Z)(o.z,"w-22");let A;!function(e){e[e.Post=0]="Post",e[e.CopyInvitation=3]="CopyInvitation"}(A||(A={}));const q=function(e){let t=e.onClose;const n=k((0,r.useState)(!1),2),a=n[0],o=n[1],u=j().onTourIndexChange;if(!a)return r.default.createElement(r.default.Fragment,null,r.default.createElement(g,{key:"intro",banner:l.n.squads.tour.banner0,title:"Let's see what you can do with Squads!",className:{container:"h-[29.25rem]",banner:"!pt-0"}}),r.default.createElement(v.m,null,r.default.createElement(P,{className:"btn-tertiary",onClick:t},"Close"),r.default.createElement(P,{className:"ml-auto btn-primary-cabbage",onClick:()=>{u(0),o(!0)}},"Start")));const s=[r.default.createElement(g,{key:"step1",banner:l.n.squads.tour.banner1_v2,title:"Share articles",description:"Share articles, receive and give feedback!",badge:"NEW"}),r.default.createElement(g,{key:"step2",banner:l.n.squads.tour.banner2,title:"Share from main feed",description:"Share articles using the share button!",badge:"NEW"}),r.default.createElement(g,{key:"step3",banner:l.n.squads.tour.banner3,title:"Private discussions",description:"Hold private discussions and stay up to date with friends, colleagues and like-minded developers.",badge:"NEW"}),r.default.createElement(g,{key:"step4",banner:l.n.squads.tour.banner4_v2,title:"Invite members",description:"Invite friends and colleagues to your Squads",badge:"NEW"})];return r.default.createElement(y,{hasCustomIndicator:!0,items:s,className:{wrapper:"w-full"},onClose:()=>null==t?void 0:t(null),onEnd:()=>null==t?void 0:t(null),onScreenIndexChange:u},((e,t)=>{let n=e.onSwipedLeft,a=e.onSwipedRight,l=e.index;return r.default.createElement(v.m,{justify:i.WD.Between},r.default.createElement(P,{className:"btn-tertiary",onClick:e=>a(e)},0===l?"Close":"Back"),t,r.default.createElement(P,{className:"btn-primary-cabbage",onClick:e=>n(e)},l===s.length-1?"Close":"Next"))}))};var D=n(58953);const T=["onRequestClose"];function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const $=function(e){let t=e.onRequestClose,n=W(e,T);const l=j().onCloseTour,i=e=>{l(),t(e)};return r.default.createElement(D.u_,R({},n,{onRequestClose:i,kind:D.u_.Kind.FlexibleCenter,size:D.u_.Size.Small,className:"overflow-hidden !border-theme-color-cabbage"}),r.default.createElement(q,{onClose:i}),r.default.createElement(a.Z,{buttonSize:o.q.Small,className:"top-3 right-3 !absolute !btn-secondary",onClick:i}))}}}]);