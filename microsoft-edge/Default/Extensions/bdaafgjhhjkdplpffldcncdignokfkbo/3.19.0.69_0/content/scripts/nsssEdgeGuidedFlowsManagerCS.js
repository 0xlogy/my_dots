(()=>{const{constants:t,uiConstants:{MESSAGES:a},NSSSHelper:n}=NSSS,{extensionAdapter:E,utils:{isObject:s,isNil:i,isBoolean:S,isArray:d}}=SymBfw;(NSSS=NSSS||{}).guidedFlowsManagerCS=new class{constructor(){this.handlePortalEvents=this.handlePortalEvents.bind(this)}_handleExtensionInstallationFlow(n){const e=[...t.NORTON_HP_EXTENSION_IDS,...t.NORTON_DS_EXTENSION_IDS];var s;!i(n)&&e.includes(n)&&(s={name:a.EXTENSION_INSTALLATION_TRIGGERED,extensionId:n},E.sendMessage(s,e=>{S(e)&&window.postMessage({name:a.EXTENSION_INSTALLED_RESPONSE,data:{[n]:e}},document.URL)}))}_validateExtensionIds(e){if(!d(e)||0===e.length)return!1;const n=[...t.NORTON_HP_EXTENSION_IDS,...t.NORTON_DS_EXTENSION_IDS];return!!e.every(e=>n.includes(e))}_handleExtensionEnableFlow(e){this._validateExtensionIds(e)&&(e={name:a.EXTENSION_ENABLE_FLOW_TRIGGERED,extensionIds:e},E.sendMessage(e))}_handleGetExtensionStatusMessage(e){this._validateExtensionIds(e)&&(e={name:a.GET_EXTENSIONS_STATUS,extensionIds:e},E.sendMessage(e,e=>{s(e)&&window.postMessage({extensionDetails:e},document.URL)}))}handlePortalEvents(e){if(n.isLandingPageURL(e.origin)&&!i(e.data)&&!i(e.data.action))switch(e.data.action){case a.EXTENSION_INSTALLATION_TRIGGERED:case a.LOAD_STORE_URL:this._handleExtensionInstallationFlow(e.data.extensionId);break;case a.EXTENSION_ENABLE_FLOW_TRIGGERED:this._handleExtensionEnableFlow(e.data.extensionIds);break;case a.GET_EXTENSIONS_STATUS:this._handleGetExtensionStatusMessage(e.data.extensionIds)}}},window.addEventListener("message",NSSS.guidedFlowsManagerCS.handlePortalEvents)})();