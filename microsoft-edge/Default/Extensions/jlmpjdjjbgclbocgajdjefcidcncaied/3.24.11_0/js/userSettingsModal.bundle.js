"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[569],{21832:(e,t,n)=>{n.d(t,{w:()=>p});var r=n(35776),a=n(94184),l=n.n(a);const o="_2EpxIrd7KiJor50gwZWyWA";function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const u=(0,n(32256).Z)("span","relative flex items-center justify-center z-2 px-3"),s="transform transition-transform text-base",f="text-theme-label-tertiary",m="scale-125";function p(e){let t=e.className,n=e.inputId,a=e.name,i=e.checked,p=e.onToggle,h=e.leftContent,d=e.rightContent;const y=(0,r.useRef)(),g=(0,r.useRef)(),v=c((0,r.useState)(0),2),b=v[0],w=v[1],O=c((0,r.useState)(0),2),E=O[0],j=O[1];(0,r.useEffect)((()=>{if(null==y||!y.current||null==g||!g.current)return;const e=y.current.getBoundingClientRect().width;w(e);const t=g.current.getBoundingClientRect().width;j(t)}),[null==y?void 0:y.current,null==g?void 0:g.current]);const x=l()(s,i?f:m),S=l()(s,i?m:f),P=i?E:b,L=Math.abs(E-b);return r.default.createElement("label",{className:l()("group relative flex h-9 w-fit cursor-pointer typo-callout font-bold",t),htmlFor:n},r.default.createElement("input",{id:n,name:a,type:"checkbox",className:"absolute w-0 h-0 opacity-0",checked:i,onChange:p}),r.default.createElement(u,{ref:y,className:i&&"text-theme-label-tertiary"},"string"==typeof h?h:r.default.cloneElement(h,{className:l()(h.props.className,x)})),r.default.createElement(u,{ref:g,className:!i&&"text-theme-label-tertiary"},"string"==typeof d?d:r.default.cloneElement(d,{className:l()(d.props.className,S)})),r.default.createElement("span",{className:"absolute inset-0 my-auto h-7 bg-cabbage-50 rounded-10 opacity-24 group-hover:opacity-32"}),r.default.createElement("span",{className:l()("absolute  top-0 h-full rounded-xl z-1",o),style:{width:`${P}px`,transform:i?`translateX(calc(100% + ${L}px))`:"translateX(0)"}}))}},70669:(e,t,n)=>{n.r(t),n.d(t,{UserSettingsModal:()=>J,default:()=>K});var r,a=n(35776),l=n(58953),o=n(94184),c=n.n(o),i=n(32256),u=n(63204),s=n(30071),f=n(38061),m=n(86548);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const h=function(e){return a.createElement("svg",p({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),r||(r=a.createElement("path",{d:"M7.833 13a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005H6.167a3.167 3.167 0 01-3.162-2.987L3 17.833v-1.666a3.167 3.167 0 012.987-3.162l.18-.005h1.666zm10 0a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005h-1.666a3.167 3.167 0 01-3.162-2.987l-.005-.18v-1.666a3.167 3.167 0 012.987-3.162l.18-.005h1.666zm-10 1.5H6.167c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152v-1.666c0-.872-.67-1.588-1.523-1.66l-.144-.007zm10 0h-1.666c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152v-1.666c0-.872-.67-1.588-1.523-1.66l-.144-.007zM7.833 3a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005H6.167a3.167 3.167 0 01-3.162-2.987L3 7.833V6.167a3.167 3.167 0 012.987-3.162L6.167 3h1.666zm10 0a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005h-1.666a3.167 3.167 0 01-3.162-2.987L13 7.833V6.167a3.167 3.167 0 012.987-3.162l.18-.005h1.666zm-10 1.5H6.167c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152V6.167c0-.872-.67-1.588-1.523-1.66L7.833 4.5zm10 0h-1.666c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152V6.167c0-.872-.67-1.588-1.523-1.66l-.144-.007z",fill:"currentcolor",fillRule:"evenodd"})))};var d;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}const g=function(e){return a.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),d||(d=a.createElement("path",{d:"M8 14H6a2 2 0 00-1.993 1.827L4 16v2a2 2 0 001.827 1.993L6 20h2l.173-.007a2 2 0 001.819-1.81L10 18v-2a2 2 0 00-1.827-1.993L8 14zm10 0h-2a2 2 0 00-1.993 1.827L14 16v2a2 2 0 001.827 1.993L16 20h2l.173-.007a2 2 0 001.819-1.81L20 18v-2a2 2 0 00-1.827-1.993L18 14zM8 4H6a2 2 0 00-1.993 1.827L4 6v2a2 2 0 001.827 1.993L6 10h2l.173-.007a2 2 0 001.819-1.81L10 8V6a2 2 0 00-1.827-1.993L8 4zm10 0h-2a2 2 0 00-1.993 1.827L14 6v2a2 2 0 001.827 1.993L16 10h2l.173-.007a2 2 0 001.819-1.81L20 8V6a2 2 0 00-1.827-1.993L18 4z",fill:"currentcolor",fillRule:"evenodd"})))};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}const b=e=>a.default.createElement(m.Z,v({},e,{IconPrimary:h,IconSecondary:g}));var w;function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}const E=function(e){return a.createElement("svg",O({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),w||(w=a.createElement("path",{d:"M5 5.75a1 1 0 110 2 1 1 0 010-2zM9.75 6h9.5a.75.75 0 110 1.5h-9.5a.75.75 0 010-1.5zm-5 5h14.5a.75.75 0 110 1.5H4.75a.75.75 0 110-1.5zm0 5h14.5a.75.75 0 110 1.5H4.75a.75.75 0 110-1.5z",fill:"currentcolor",fillRule:"evenodd"})))};var j;function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}const S=function(e){return a.createElement("svg",x({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),j||(j=a.createElement("path",{d:"M19 16a1 1 0 01.117 1.993L19 18H5a1 1 0 01-.117-1.993L5 16h14zm0-5a1 1 0 01.117 1.993L19 13H5a1 1 0 01-.117-1.993L5 11h14zM5 6a1 1 0 110 2 1 1 0 010-2zm14 0a1 1 0 01.117 1.993L19 8h-9a1 1 0 01-.117-1.993L10 6h9z",fill:"currentcolor",fillRule:"evenodd"})))};function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}const L=e=>a.default.createElement(m.Z,P({},e,{IconPrimary:E,IconSecondary:S}));var z=n(21832),N=n(62835),C=n(28682),k=n(26346),I=n(87328);const A=["name","children"],M=["className"];function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const $=[{label:"Eco",value:"eco"},{label:"Roomy",value:"roomy"},{label:"Cozy",value:"cozy"}],_=(0,i.Z)("section","flex flex-col font-bold mt-6"),B=(0,i.Z)("h3","text-theme-label-tertiary mb-4 font-bold typo-footnote"),D=(0,i.Z)("div","flex flex-col items-start pl-1.5 -my-0.5"),V=e=>{let t=e.name,n=e.children,r=Z(e,A);return a.default.createElement(s.r,H({inputId:`${t}-switch`,name:t,className:"my-3",compact:!1},r),n)};function W(e){let t=e.className,n=Z(e,M);const r=(0,a.useContext)(N.ZP),l=r.user,o=r.showLogin,i=(0,a.useContext)(k.Z).flags,s=(0,C.mu)(C.AN.CompanionPermissionPlacement,i),m=(0,a.useContext)(f.ZP),p=m.spaciness,h=m.setSpaciness,d=m.themeMode,y=m.setTheme,g=m.openNewTab,v=m.toggleOpenNewTab,w=m.insaneMode,O=m.toggleInsaneMode,E=m.showTopSites,j=m.toggleShowTopSites,x=m.sortingEnabled,S=m.toggleSortingEnabled,P=m.optOutWeeklyGoal,A=m.toggleOptOutWeeklyGoal,R=m.optOutCompanion,W=m.toggleOptOutCompanion,q=m.autoDismissNotifications,G=m.toggleAutoDismissNotifications,U=T((0,a.useState)(f.np),2),F=U[0],J=U[1];return(0,a.useEffect)((()=>{if(window&&!window.matchMedia("(prefers-color-scheme: dark)")){const e=F.filter((e=>"auto"!==e.value));J(e)}}),[]),a.default.createElement("div",H({className:c()("flex","flex-col",t)},n),a.default.createElement(_,{className:"mt-0"},a.default.createElement(B,null,"Layout"),a.default.createElement(z.w,{inputId:"layout-switch",name:"insaneMode",leftContent:a.default.createElement(b,{secondary:!w}),rightContent:a.default.createElement(L,{secondary:w}),checked:w,className:"mx-1.5",onToggle:O})),a.default.createElement(_,null,a.default.createElement(B,null,"Theme"),a.default.createElement(u.Y,{name:"theme",options:F,value:d,onChange:y})),a.default.createElement(_,null,a.default.createElement(B,null,"Density"),a.default.createElement(u.Y,{name:"density",options:$,value:p,onChange:h})),a.default.createElement(_,null,a.default.createElement(B,null,"Preferences"),a.default.createElement(D,null,a.default.createElement(V,{name:"new-tab",checked:g,onToggle:v},"Open links in new tab"),a.default.createElement(V,{name:"top-sites",checked:E,onToggle:j},"Show custom shortcuts"),a.default.createElement(V,{name:"feed-sorting",checked:x,onToggle:S},"Show feed sorting menu"),a.default.createElement(V,{name:"weekly-goal-widget",checked:!P,onToggle:()=>(e=>{if(l)return e();o(I.IP.Settings)})(A)},"Show Weekly Goal widget"),"off"!==s&&a.default.createElement(V,{name:"hide-companion",checked:!R,onToggle:W},"Enable companion"))),a.default.createElement(_,null,a.default.createElement(B,null,"Accessibility"),a.default.createElement(D,null,a.default.createElement(V,{name:"auto-dismiss-notifications",checked:q,onToggle:G},"Automatically dismiss notifications"))))}var q=n(36269);const G=["onRequestClose"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e){let t=e.onRequestClose,n=F(e,G);return(0,q.I)({isOpen:n.isOpen,title:"feed settings"}),a.default.createElement(l.u_,U({kind:l.u_.Kind.FlexibleCenter,size:l.u_.Size.Small,onRequestClose:t},n),a.default.createElement(l.u_.Header,{title:"Customize"}),a.default.createElement(l.u_.Body,null,a.default.createElement(W,null)))}const K=J},36269:(e,t,n)=>{n.d(t,{I:()=>c});var r=n(35776),a=n(38e3);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){let t=e.isOpen,n=e.title,c=e.trigger;const i=(0,r.useContext)(a.ZP).trackEvent;(0,r.useEffect)((()=>{const e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({event_name:`${t?"open":"close"} ${n}`},c&&{extra:JSON.stringify({trigger:c})});if(i(e),!0===t)return()=>{e.event_name=`close ${n}`,i(e)}}),[t])}}}]);