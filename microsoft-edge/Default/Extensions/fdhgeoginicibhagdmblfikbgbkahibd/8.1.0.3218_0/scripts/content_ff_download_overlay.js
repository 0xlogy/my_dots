/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2023 McAfee, LLC
 *
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *
 */(()=>{"use strict";const t="LOCAL_STORE",e="CONTENT_HANDLER",s="EXECUTE_COMMAND",n="FOCUS_OR_CREATE_TAB",o="GET_BK_GLOBALS",a="GET_EXTENSION_STATUS",i="GET_TAB_DATA",r="TI_REQUEST",c="PLACEHOLDER_TEXT",l="REMOVE_TAB",d="SEND_TELEMETRY",m="SET_VIEWPORT",u="WHITELIST",h="RESET_NATIVE_SETTING",E="UPDATE_BK_NATIVE_SETTINGS",T="SHOW_SIDEBAR_MAIN",g="GET_POPUP_DATA",_="GET_SETTINGS_DATA",S="RESET_SETTINGS",p="GET_TYPOSQUATTING_DATA",y="IS_FRAME_BLOCKED",A="IS_WHITELISTED",R="ANY_BLOCKED_IFRAMES",O="ANY_BLOCKED_CRYPTOSCRIPTS",C="UNBLOCK_ALL_IFRAMES",N="VIEW_SITE_REPORT",f="SEARCH_ANNOTATION",I="UPDATE_ENGINE_STATS",w="SOCIAL_MEDIA_ANNOTATION",M="UPDATE_RAT_DETECTION_SHOWING_FLAG",D="SEARCH_SUGGEST",P="SAVE_FORM_INFO",L="GET_FORM_INFO_CACHE",b="CLEAR_FORM_INFO_CACHE",F="SAVE_MULTISTEP_LOGIN",G="GET_FD_WEIGHTS",x="GET_FD_EXCEPTIONS",H="GET_FD_CRF_PARAMS",U="CLEAR_DWS_INFO",v="GET_CACHED_DWS_INFO",q="UPDATE_DWS_WHITELIST",k="LAUNCH_IDPS_LOGIN",B="UPDATE_DWS_SHOWN",W="GET_APS_DETAILS",Y="SIGN_UP_FORM_DETECTED",$="SET_FF_POLICY_COLLECTION",V="SET_FF_POLICY_LAST_SHOWN",K="PAGE_OVERLAY",z="PING_CONTENT_FF_DL_OVERLAY",Q="BROADCAST_TO_FOREGROUND",X="SEARCH_EXTENSION_OVERLAY",j="FINISH_DOWNLOAD",J={PING:0,DISCONNECT_NATIVE:1,SET_PROPERTY_EX:2,SET_PROPERTY:3,GET_PROPERTY:4,CLEAR_GTI_CACHE:5,RESET_CRYPTO:6,CLEAN_TYPOSQUATING_WHITELIST:7,CLEAR_TYPOSQUATING_CACHE:8,CLEAN_CRYPTO_WHITELIST:10,CLEAN_RAT_WHITELIST:12,CLEAN_RAT_CACHE:13,REPLACE_TRUSTED_DOMAIN:15,VERIFY_GTI_REQUEST:17,VERIFY_TYPOSQUAT_SERVER:18,GET_ALL_WA_SETTINGS:19,SET_STORAGE_PROPERTY:20,GET_STORAGE_PROPERTY:21,REINIT_SCHEDULED_TASKS:22,OPEN_SETTINGS:23,OPEN_ACTION_PANEL:24,GET_MEMORY_FOOTPRINT:26,ENDURANCE_TEST_RESET:27,FORM_DETECTION_RESULT:28,SHOW_UNUSED_SELECTORS:29,SET_MTI_GLOBALS:30,REMOVE_STORAGE_PROPERTY:31},Z=chrome,tt=0,et=0,st=1,nt=2,ot=3,at=4,it=1,rt=2,ct=3,lt=4,dt={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},mt={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class ut{static log(t,e=null){ht(t,it,e)}static error(t,e=null){ht(t,rt,e)}static warn(t,e=null){ht(t,ct,e)}static debug(t,e=null){ht(t,lt,e)}}const ht=(t,e,s)=>{const n=tt;if(n===et)return;let o="chrome-extension:"===location.protocol?dt.BACKGROUND:dt.CONTENT;s&&dt[s]&&(o=s);const a=new Date,i=e===rt?t:`%c[${o} ${a.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${t}`,r=mt.DEFAULT;let c=mt[o];if(c||(c=r),n>=nt&&e===rt&&console.error(t),n>=st&&e===it&&console.log(i,c,r),n>=ot&&e===ct){const t="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${i}`,t,c,r)}if(n>=at&&e===lt){const t="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${i}`,t,c,r)}};class Et{onHttpResponse(t){if(!t.ok){const e=`HttpService Status: ${t.status}\nError Text: ${t.statusText}`;ut.warn(e)}return t}async sendHttpRequest({url:t,headers:e,body:s,method:n="GET"}){try{const o=await fetch(t,{headers:e,method:n,body:s});return await this.onHttpResponse(o)}catch(e){return ut.error(`Failed to fetch on: "${t}", got error: ${e?.message}`),null}}}class Tt{static handlePromiseMessage(t,e=null){return new Promise(((s,n)=>{chrome.runtime.sendMessage(t,(t=>{"function"==typeof e?e(s,n,t):((t,e,s)=>{chrome.runtime.lastError&&e(chrome.runtime.lastError.message),t(s)})(s,n,t)}))}))}}class gt{static localStore(e,s){const n=t;return Tt.handlePromiseMessage({command:n,action:e,data:s})}static sessionStore(e,s){const n=t;return Tt.handlePromiseMessage({command:n,action:e,data:s})}static isFrameBlocked(t){const e=y;return Tt.handlePromiseMessage({command:e,url:t})}static makeMTIRequest(t,e){const s={command:r,requestData:t,referer:e};return Tt.handlePromiseMessage(s)}static executeCommand(t,e){const n=s;Z.runtime.sendMessage({command:n,commandId:t,params:e})}static focusOrCreateTab(t){const e=n;Z.runtime.sendMessage({command:e,url:t})}static closeTab(){const t=l;Z.runtime.sendMessage({command:t})}static whitelist(t,e,s){const n=u;return Tt.handlePromiseMessage({action:t,command:n,type:e,data:s})}static getPopupData(){const t=g;return Tt.handlePromiseMessage({command:t})}static getSettingsData(){const t=_;return Tt.handlePromiseMessage({command:t})}static searchAnnotation(t,e){const s=f;return Tt.handlePromiseMessage({action:t,data:e,command:s})}static socialMediaAnnotation(t,e){const s=w;return Tt.handlePromiseMessage({action:t,data:e,command:s})}static async getBkGlobals(t=!1){return new Promise((e=>{const s=o;Tt.handlePromiseMessage({command:s,bIncludeSearchEngines:t}).then((t=>{e(JSON.parse(t))}))}))}static viewSiteReport(t=null,e=!1){const s=N;Z.runtime.sendMessage({command:s,url:t,showInNewTab:e})}static getTypoSquattingData(t){const e=p;return Tt.handlePromiseMessage({command:e,domain:t})}static getPlaceholderText(t){const e=c;return Tt.handlePromiseMessage({command:e,id:t})}static setViewPort(t,e){const s=m;Z.runtime.sendMessage({command:s,x:t,y:e})}static sendTelemetry(t){const e=d;Z.runtime.sendMessage({command:e,telemetry:t})}static anyBlockedIframes(t){const e=R;return Tt.handlePromiseMessage({command:e,frameUrls:t})}static anyBlockedCryptoScripts(){const t=O;return Tt.handlePromiseMessage({command:t})}static resetSettings(){const t=S;Z.runtime.sendMessage({command:t})}static sendEngineStat(t){Z.runtime.sendMessage({command:I,engine:t})}static contentHandler(t){const s=e;Z.runtime.sendMessage({command:s,message:t})}static getTabData(t={}){const e={command:i,...t};return Tt.handlePromiseMessage(e)}static isWhitelisted(t){const e={command:A,url:t};return Tt.handlePromiseMessage(e)}static getExtensionStatus(t){return Tt.handlePromiseMessage({command:a,extension_id:t})}static unblockAllIframes(){const t=C;Z.runtime.sendMessage({command:t})}static updateRatDetectionShowingFlag(t){const e=M;Z.runtime.sendMessage({command:e,showed:t})}static getSearchSuggest(t){const e={command:D,searchTerm:t};return Tt.handlePromiseMessage(e)}static resetNativeSetting(t){const e=h;Z.runtime.sendMessage({command:e,setting:t})}static saveFormInfo(t,e){const s=P;Z.runtime.sendMessage({command:s,username:t,hostname:e})}static saveMultiStepLogin(t,e){const s=F;Z.runtime.sendMessage({command:s,data:t,completeLogin:e})}static getFormInfoCache(){const t=L;return Tt.handlePromiseMessage({command:t})}static clearFormInfoCache(){const t=b;Z.runtime.sendMessage({command:t})}static updateDWSWhitelist(t){const e=q;Z.runtime.sendMessage({command:e,email:t})}static getCachedDWSInfo(t){const e={command:v,email:t};return Tt.handlePromiseMessage(e)}static clearCachedDWSInfo(t){const e=U;Z.runtime.sendMessage({command:e,email:t})}static updateDWSShown(t){const e=B;Z.runtime.sendMessage({command:e,email:t})}static getAPSDetails(){const t=W;return Tt.handlePromiseMessage({command:t})}static signUpFormDetected(){const t=Y;Z.runtime.sendMessage({command:t})}static updateBkNativeSettings(t,e){const s=E;Z.runtime.sendMessage({command:s,name:t,value:e})}static launchIDPSLogin(){const t=k;Z.runtime.sendMessage({command:t})}static showSidebarMain(){const t=T;Z.runtime.sendMessage({command:t})}static setFFPolicyCollection({personal:t,activity:e}){const s=$;Z.runtime.sendMessage({command:s,personal:t,activity:e})}static setFFPolicyLastShown(){const t=V;Z.runtime.sendMessage({command:t})}static broadcastToForeground(t){const e=Q;Z.runtime.sendMessage({command:e,payload:t})}static getFDWeights(){const t=G;return Tt.handlePromiseMessage({command:t})}static getFDExceptions(){const t=x;return Tt.handlePromiseMessage({command:t})}static getFDCrfParams(){const t=H;return Tt.handlePromiseMessage({command:t})}}class _t{static async loadTemplate(t,e,s=null){const{hostStyles:n}=t,o=document.createElement("div");for(const t in n)o.style[t]=n[t];const a=(await gt.getBkGlobals()).shadowMode,i=o.attachShadow({mode:a});return await _t.populateContainer(e,i),s&&await _t.populateContainer(s,i),document.body.appendChild(o),{hostNode:o,shadowRoot:i}}static async populateContainer(t,e){const{htmlPath:s,cssPath:n,containerId:o,waImageSecret:a}=t,i=await _t.getTemplate(s,n,a);(o?e.querySelector(`#${o}`):e).appendChild(i)}static async reloadTemplate(t,e,s){s.innerHTML="",e&&await _t.populateContainer(e,s),await _t.populateContainer(t,s)}static async getTemplate(t,e=null,s){const n=new Et,o=document.createElement("template"),a=await n.sendHttpRequest({url:Z.runtime.getURL(t)}),i=await a.text();let r="";if(e){const t=await n.sendHttpRequest({url:Z.runtime.getURL(e)});r=await t.text(),r=`<style>${r}</style>`}let c="";c=i,o.innerHTML=`${r}${c}`;for(const t of o.content.querySelectorAll("img[x-mcsrc]")){const e=t.getAttribute("src"),n=`?secret=${s}`;t.src=Z.runtime.getURL(e+n)}return o.content.cloneNode(!0)}static async initFontOnDocument(){try{const t=Z.runtime.getURL("fonts/Poppins-Regular.ttf"),e=new FontFace("mcafeePoppins",`url(${t})`).load(),s=Z.runtime.getURL("fonts/OpenSans-Regular.ttf"),n=new FontFace("mcafeeOpenSans",`url(${s})`).load(),[o,a]=await Promise.all([e,n]);document.fonts.add(o),document.fonts.add(a)}catch(t){ut.error(t)}}static fadeIn(t){t.style.opacity=0,t.style.display="block",function e(){const s=+t.style.opacity+.1;s<1&&(t.style.opacity=s,window.requestAnimationFrame(e))}()}static fadeOut(t,e){let s=!1;t.style.opacity=1,function n(){if(s)return;const o=+t.style.opacity-.1;o<=0?(s=!0,t.style.display="none",e()):(t.style.opacity=o,window.requestAnimationFrame(n))}()}}Symbol.iterator;const St={NONE:0,LINKEDIN:1,INSTAGRAM:2,YOUTUBE:4,FACEBOOK:8,TWITTER:16,REDDIT:32},pt=(Object.values(St).reduce(((t,e)=>t+e)),{NONE:"NONE",ONLY_SECURE_SEARCH:"ONLY_SECURE_SEARCH",ALL:"ALL",*[Symbol.iterator](){for(const t of Object.keys(this))yield t}});const yt={uid:"0DE9E47C-871A-4F90-8440-B190C216800A",browserType:3,externalMsgDispatcher:new class{isvalidRequestType(t){let e=!1;for(const s in J)J[s]===t&&(e=!0);return e}validateMsg(t,e){return!(void 0===t||void 0===e||!this.isvalidRequestType(t))||(ut.error("Invalid msg to be sent externally"),!1)}sendExtnMsg(t,e,s){return new Promise(((n,o)=>{const{request_type:a,payload:i}=e;this.validateMsg(a,i)||o(Error("sendExtnMsg: Invalid Message")),Z.runtime.sendMessage(t,e,(t=>{"function"==typeof s?s(n,o,t):((t,e,s)=>{Z.runtime.lastError&&e(Z.runtime.lastError.message),t(s)})(n,o,t)}))}))}},reputationReqCount:5,imageCounter:0,isSearchHitSend:!1,resourceRequestor:null,clientFunctions:null,activeURI:null,eventHandler:null,bkGlobals:null,searchEngine:null,searchAnnotationOption:pt.ONLY_SECURE_SEARCH,socialMediaOption:St.NONE,socialMediaToggle:!1,hasReportPage:!0};class At{constructor(t,e=null){this.closing=!1,this.showing=!1,this.animateReload=!0,this.allowReplace=!0,this.componentData=null,this.template=null,this.hostNode=null,this.shadowRoot=null,this.hostStyles=t,this.baseTemplate=e,this.showContainer=this.showContainer.bind(this),this.closeContainer=this.closeContainer.bind(this),this.query=this.query.bind(this),this.clickListener=this.clickListener.bind(this),this.bgGrayout=!1,this.bgGrayoutElement=null}async initContainer(t,e=null){if(this.closing)return!1;if(this.showing&&!1===this.allowReplace&&At.isSameObject(t,this.template))return!1;if(this.componentData&&JSON.stringify(this.componentData)===JSON.stringify(e))return!1;this.componentData=e;const{allowReplace:s=!0,animateReload:n=!0}=t;if(this.allowReplace=s,this.animateReload=n,this.showing=!0,this.hostNode&&s)return await this.reloadContainer(t),!0;let o={...t};this.template=o,null===this.baseTemplate&&(this.baseTemplate=o,o=null);const a={hostStyles:{...this.hostStyles.DEFAULT,...this.hostStyles.HIDE}},{hostNode:i,shadowRoot:r}=await _t.loadTemplate(a,this.baseTemplate,o);return this.hostNode=i,this.shadowRoot=r,yt.bkGlobals=await gt.getBkGlobals(),!0}static isSameObject(t=null,e=null){return null===t&&null===e||t&&e&&JSON.stringify(t)===JSON.stringify(e)}async reloadContainer(t,e=this.animateReload){await this.closeContainer(!1,e),this.template=t,await _t.reloadTemplate(t,this.baseTemplate,this.shadowRoot)}setBackgroundOverlay(t){const e=document.querySelector("body");if(t){const t="display:none; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 99999; background: rgba(0, 0, 0, 0.3);";this.bgGrayoutElement=document.createElement("div"),this.bgGrayoutElement.style.cssText=t,e.append(this.bgGrayoutElement),e.style.overflow="hidden",_t.fadeIn(this.bgOverlay)}else this.bgGrayoutElement&&_t.fadeOut(this.bgGrayoutElement,(()=>{})),e.style.overflow="auto"}showBackgroundGrayout(t){if(this.bgGrayout=t,!t)return;this.bgGrayoutElement=document.createElement("div"),this.bgGrayoutElement.style.cssText="display:none; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 99999; background: rgba(0, 0, 0, 0.3);";const e=document.querySelector("body");e.append(this.bgGrayoutElement),e.style.overflow="hidden",_t.fadeIn(this.bgGrayoutElement)}hideBackgroundGrayOut(){this.bgGrayoutElement&&this.bgGrayout&&(_t.fadeOut(this.bgGrayoutElement,(()=>{})),document.querySelector("body").style.overflow="auto",this.bgGrayout=!1)}showContainer(t=null){const e=t&&t.bgGrayout;this.showBackgroundGrayout(e);for(const t in this.hostStyles.SHOW)this.hostNode.style[t]=this.hostStyles.SHOW[t]}closeContainer(t=!0,e=!0){return new Promise((s=>{if(this.hideBackgroundGrayOut(),this.closing)return void s();this.closing=!0;const n=()=>{this.closing=!1,this.showing=!1,t&&(this.hostNode.remove(),this.hostNode=null,this.componentData=null,this.template=null,this.shadowRoot=null,this.baseTemplate=null)};if(!e)return n(),void s();const o={...this.hostStyles.DEFAULT,...this.hostStyles.HIDE};for(const t in o)this.hostNode.style[t]=o[t];setTimeout((()=>s(n())),500)}))}query(t){return this.shadowRoot.querySelector(t)}querySelector(t){return this.shadowRoot.querySelector(t)}querySelectorAll(t){return this.shadowRoot.querySelectorAll(t)}clickListener(t,e){const s=this.shadowRoot.querySelector(t);s&&s.addEventListener("click",(t=>{yt.bkGlobals.isTrustCheckRequired&&!t.isTrusted||e(t)}))}}const Rt={DEFAULT:{bottom:"0",right:"0",padding:"0",margin:"0",zIndex:"2147483640",position:"fixed",border:"none",opacity:"0",display:"block"},HIDE:{opacity:"0",height:"0",width:"0"},SHOW:{opacity:"1",width:"100%",height:"100%",backgroundColor:"transparent"}};class Ot extends At{constructor(){super(Rt)}async init(t,e){return await this.initContainer(t,e)}}class Ct{geti18nRes(t,e=[]){let s=Z.i18n.getMessage(t,e);const n=Z.i18n.getMessage("res_PRODUCT_NAME_TRADEMARKED");return s=s.replace(/%PRODUCTNAME%/g,n),s}getResStr(t,e){const s=this.geti18nRes(t);e("??"===s?"":s)}}class Nt{constructor(t=null,e=document){if(this.resourcerequestor=new Ct,this.document=e,t){const e=this.document.querySelectorAll(`#${t}`);e&&(this.document=e[0].contentDocument)}}localeData(t,e=[]){return this.resourcerequestor.geti18nRes(t,e)}fillText(t,e){const s=this.document.getElementById(t);if(s){const t=s.getAttribute("x-mcinsertposition");if(t)return void s.insertAdjacentText(t,e);s.textContent=e}}fillLocalizedTexts(){for(const{id:t}of this.document.querySelectorAll("*[x-mclocalizedtext]")){const e=this.localeData(t);if(null==e)return!1;this.fillText(t,e)}return!0}fillInputPlaceHolders(){for(const{id:t}of this.document.querySelectorAll("*[x-inputplaceholder]")){const e=this.localeData(t),s=this.document.getElementById(t);if(null==e)return!1;null!=s&&s.setAttribute("placeholder",e)}return!0}fillPlaceHolderInternal(t){gt.getPlaceholderText(t).then((e=>{this.fillText(t,e.text)})).catch((()=>{}))}fillPlaceHolders(){for(const{id:t}of this.document.querySelectorAll("*[x-mcplaceholder]"))this.fillPlaceHolderInternal(t);return!0}init(){this.fillLocalizedTexts(),this.fillPlaceHolders(),this.fillInputPlaceHolders()}}class ft{constructor(t,e){this.componentData=t,this.shadowRoot=e.shadowRoot,this.query=e.query,this.showContainer=e.showContainer,this.closeContainer=e.closeContainer,this.clickListener=e.clickListener}async init(){this.initListeners(),this.initContent(),this.initBackgroundListener(),this.showContainer()}initListeners(){this.clickListener("#download_overlay_close_btn",this.closeContainer)}initContent(){const t=new Nt(null,this.shadowRoot);t.init(),t.fillText("overlay_instruction",t.localeData("overlay_add_ss"))}initBackgroundListener(){Z.runtime.onMessage.addListener(((t,e)=>{if(e.id!==Z.runtime.id)return;const{command:s,payload:n}=t;if(s===K&&n.subcommand===j){this.query(".step_1").setAttribute("class","step_1"),this.query(".step_2").setAttribute("class","step_2 active");let t=Z.i18n.getMessage("overlay_accept_ss");this.query("#overlay_instruction").innerHTML=t,this.query(".description_line_1").setAttribute("class","description_line_1 animate"),this.query(".arrow-container").setAttribute("class","arrow-container point-accept-ss")}}))}}class It{constructor(){this.pageOverlayContainer=new Ot,this.componentMap={[X]:{template:{htmlPath:"html/download_overlay.html",cssPath:"css/download_overlay.css"},Component:ft}}}async processMessage(t){const{subcommand:e,componentData:s}=t;if(!e)return;const n=this.componentMap[e];if(!n)return;const{template:o,Component:a}=n;await this.pageOverlayContainer.init(o,s)&&new a(s,this.pageOverlayContainer).init()}}class wt{constructor(t){this.pingCommand=t,this.basePingListener()}basePingListener(t=null){chrome.runtime.onMessage.addListener(((e,s,n)=>{if(s.id!==chrome.runtime.id)return;const{command:o}=e;o===this.pingCommand&&(n({content:!0}),"function"==typeof t&&t())}))}}(new class extends wt{constructor(){super(z),this.pageOverlayUIHandler=new It}main(){var t;t=()=>{const t={subcommand:X,componentData:{sidebarMainData:{}}};this.pageOverlayUIHandler.processMessage(t),window.location.href="https://sadownload.mcafee.com/products/SA/Win/xpi/searchextension/searchextension.xpi"},"undefined"!=typeof document&&null!==document&&("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?t():document.addEventListener("DOMContentLoaded",t))}}).main()})();
//# sourceMappingURL=../sourceMap/edge/scripts/content_ff_download_overlay.js.map