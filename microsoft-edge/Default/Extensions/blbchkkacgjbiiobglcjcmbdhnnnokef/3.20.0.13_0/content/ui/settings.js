!function r(a,o,i){function s(t,e){if(!o[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=o[t]={exports:{}},a[t][0].call(n.exports,function(e){return s(a[t][1][e]||e)},n,n.exports,r,a,o,i)}return o[t].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)s(i[e]);return s}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(e){var t=n;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");var t=this,e=(n.__proto__||Object.getPrototypeOf(n)).call(this,e);if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(n,[{key:"render",value:function(){var e=null;return this.props.isChecked&&(e="../images/btn-global-checked.svg"),this.props.isChecked||(e="../images/btn-global-unchecked.svg"),React.createElement("div",{className:"checkbox-container"},React.createElement("img",{src:e}))}}]),n}(React.Component);n.default=o},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(e){var t=n;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");var t=this,e=(n.__proto__||Object.getPrototypeOf(n)).call(this,e);if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(n,[{key:"render",value:function(){return React.createElement("div",{className:"product-header"},React.createElement("div",{className:"norton-image"}),React.createElement("div",{className:"header-divider"}),React.createElement("div",{className:"product-header-title"},this.props.strings[this.props.productName]))}}]),n}(React.Component);n.default=o},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var e=e("./checkbox.jsx"),o=(e=e)&&e.__esModule?e:{default:e};var i=SymBfw.extensionAdapter,s=NSSS.uiConstants.MESSAGES,e=function(e){var t=n;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function n(e){if(this instanceof n)return(e=function(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))).state={linkGuardEnabled:e.props.isLinkGuardEnabled},e._toggleLinkGuardEnable=e._toggleLinkGuardEnable.bind(e),e._addEventListener=e._addEventListener.bind(e),e;throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(n,[{key:"componentDidMount",value:function(){i.addMessageListener(this._addEventListener)}},{key:"_addEventListener",value:function(e){e.id===s.SET_LINK_GUARD_ENABLED_NOTIFICATION&&this.setState({linkGuardEnabled:!0})}},{key:"_toggleLinkGuardEnable",value:function(){this.setState({linkGuardEnabled:!this.state.linkGuardEnabled}),i.sendMessage({name:s.UPDATE_FG_LINK_GUARD,message:!this.state.linkGuardEnabled})}},{key:"render",value:function(){return React.createElement("div",{className:"link-guard"},React.createElement("div",{className:"link-guard-title share-data-title"},this.props.strings["Link Guard"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox link-guard",onClick:this._toggleLinkGuardEnable},React.createElement(o.default,{isChecked:this.state.linkGuardEnabled})),React.createElement("div",{className:"share-data-text"},this.props.strings["Identify unsafe links in Webmail, Facebook, and Twitter"])))}}]),n}(React.Component);n.default=e},{"./checkbox.jsx":1}],4:[function(R,e,w){!function(S){!function(){"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.PrivacyContainer=w.StartTour=w.GDPRContainer=w.SettingsHeading=void 0;var e=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=i(R("./header.jsx")),n=i(R("./checkbox.jsx")),a=i(R("./utils.jsx")),o=i(R("./linkGuard.jsx"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=NSSS.uiConstants.MESSAGES,d=SymBfw.extensionAdapter,p=SymBfw.utils.isntNil,f=(SymBfw.utils.isBoolean,NSSS.constants),h=w.SettingsHeading=(l(y,React.Component),e(y,[{key:"render",value:function(){return React.createElement("div",{className:"settings-text"},this.props.strings.Settings)}}]),y);function y(e){return s(this,y),c(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,e))}var m=w.GDPRContainer=(l(b,React.Component),e(b,[{key:"_toggleCheckbox",value:function(){this.setState({isSharingData:!this.state.isSharingData}),d.sendMessage({name:u.SET_TELEMETRY_ENABLED,message:!this.state.isSharingData})}},{key:"render",value:function(){return React.createElement("div",{className:"gdpr-container"},React.createElement("div",{className:"share-data-title"},this.props.strings["Share Data with Norton"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox",onClick:this._toggleCheckbox},React.createElement(n.default,{isChecked:this.state.isSharingData})),React.createElement("div",{className:"share-data-text"},this.props.strings["Share usage and error data anonymously with Norton and help us make our products even better"])))}}]),b);function b(e){s(this,b);e=c(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,e));return e.state={isSharingData:e.props.isTelemetryEnabled},e._toggleCheckbox=e._toggleCheckbox.bind(e),e}var v=w.StartTour=function(e){return React.createElement("div",{className:"start-tour-button-container"},React.createElement("span",{className:"start-tour",onClick:e.onClick}," ",e.strings["Start Tour"]," "),React.createElement("span",{className:"new-flag"}," ",e.strings.New," "))},g=w.PrivacyContainer=(l(E,React.Component),e(E,[{key:"_privacyPolicyClicked",value:function(){d.sendMessage({name:u.SETTINGS_PRIVACY_POLICY})}},{key:"render",value:function(){return React.createElement("div",{className:"privacy-container",onClick:this._privacyPolicyClicked},this.props.strings.Privacy)}}]),E);function E(e){s(this,E);e=c(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,e));return e._privacyPolicyClicked=e._privacyPolicyClicked.bind(e),e}l(k,React.Component),e(k,[{key:"componentDidMount",value:function(){d.sendMessage({name:u.EXTN_SETTINGS_PAGE_LOADED_TELEMETRY})}},{key:"handleStartTourButtonClicked",value:function(){d.sendMessage({name:u.START_HOME_PAGE_TOUR})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement(t.default,{strings:this.props.strings,productName:this.props.productName}),React.createElement("div",{className:"settings-container"},React.createElement(h,{strings:this.props.strings}),React.createElement(m,{strings:this.props.strings,isTelemetryEnabled:this.props.isTelemetryEnabled}),this.props.showHomepageTourButton?React.createElement(v,{strings:this.props.strings,onClick:this.handleStartTourButtonClicked}):null,this.props.isLayoutSupported?React.createElement(o.default,{strings:this.props.strings,isLinkGuardEnabled:this.props.isLinkGuardEnabled}):null,React.createElement(g,{strings:this.props.strings})))}}]);var _=k;function k(e){s(this,k);e=c(this,(k.__proto__||Object.getPrototypeOf(k)).call(this,e));return e.props.direction&&a.default.setDirection(e.props.direction),e.handleStartTourButtonClicked=e.handleStartTourButtonClicked.bind(e),e}w.default=_,e={show:function(){var i=NSSS.uiConstants.EXTENSION_TYPE===NSSS.uiConstants.THREE_IN_ONE,s=f.PRODUCT_NAME.substring(7);d.sendMessage({name:u.SETTINGS_PAGE_UI_INIT},function(e){var t,n,r,a,o;p(e)&&(t=e.strings,n=e.direction,r=e.isTelemetryEnabled,a=e.isLayoutSupported,o=e.isLinkGuardEnabled,e=e.showHomepageTourButton,ReactDOM.render(React.createElement(_,{strings:t,direction:n,productName:s,isTelemetryEnabled:r,isLayoutSupported:a,isLinkGuardEnabled:o,showHomepageTourButton:i&&e}),document.getElementById("container")))})}},(S.NSSS.showSettingsUI=e).show()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./checkbox.jsx":1,"./header.jsx":2,"./linkGuard.jsx":3,"./utils.jsx":5}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=SymBfw,i=o.utils.isntNil,s=o.extensionAdapter,c=NSSS.uiConstants.MESSAGES,o=(r(l,null,[{key:"setDirection",value:function(e){var t=document.getElementsByTagName("body");i(t)&&i(t[0])&&t[0].setAttribute("dir",e)}},{key:"isTrustedEvent",value:function(e){if(SymBfw.utils.isNil(e))throw new Error("event should not be null");return e.isTrusted}},{key:"constructURL",value:function(e){return e=!SymBfw.utils.isString(e)||""===e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("ftp://")?e:"https://"+e}},{key:"isValidUrl",value:function(e){if(!/^[a-zA-Z0-9#%@&_\-=:\\.\/?]*$/.test(e))return!1;try{new URL(e)}catch(e){return!1}return!0}},{key:"getDocumentUrl",value:function(){return location.href}},{key:"debounce",value:function(t,n){var r=this,a=arguments,o=void 0;return function(e){o&&clearTimeout(o),o=setTimeout(function(e){o=null,t.apply(r,a)},n)}}},{key:"getFavIconUrl",value:function(e){return s.getExtensionURL("_favicon/?pageUrl="+encodeURIComponent(e)+"&size=32")}},{key:"getTooltipTitle",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:40,e=e&&e.length>n?e.slice(0,n)+"...":e,n=t&&t.length>n?t.slice(0,n)+"...":t;return e&&n?e+"\n"+n:e||n}},{key:"sendBookmarksClickeEventToBG",value:function(e){s.sendMessage({id:c.BOOKMARKS_URL_CLICKED,message:{url:e}})}}]),l);function l(){if(!(this instanceof l))throw new TypeError("Cannot call a class as a function")}n.default=o},{}]},{},[4]);