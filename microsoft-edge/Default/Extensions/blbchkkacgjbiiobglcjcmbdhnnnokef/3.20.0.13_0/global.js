var guid;!function(e){"use strict";(e.NSSS=e.NSSS||{}).searchGlobal=function(o,l){var i={},a=o.logger,E=(o.utils,l.helperUtils),n=o.utils.isNil,t=o.utils.isntNil,r=(o.utils.isBoolean,l.constants),S=l.globalSettings;o.settings;let c=o.extensionAdapter,d=l.NSSSHelper;o.utils.isString,o.constants.BROWSER_TYPE;const{constants:s,uiConstants:_,uiConstants:{MESSAGES:T},nsssDarkModeHandlerBG:A}=l;return i.settingsContainer=null,i.isWindowsOS=!1,i.IS_HP=!1,i.handleOmniSearchEvent=function(r){return new Promise(async n=>{if(o.globals.BROWSER!==o.constants.BROWSER_TYPE.FIREFOX||l.privacyPromptSettings.getPrivacyConsent()){var a=r.url,a=E.getQueryString("q",a);let e=E.getSearchURLTemplate(l.ocodeMgr.getDSOCode()).replace("$$TEMPLATE$$",a);var a=await E.getSettingsFromHomePageExtension(),s=E.getDarkModeThemeForDS(a),i=s===_.THEMES.DARK_THEME;let t;a?(t=a[_.SAME_TAB_LAUNCH_SERP_PARAM],S.setPreviousHPDarkModeTheme(s)):t=!1;a=i?"true":"false",s=(e=e.concat(`&${_.DARK_MODE_PARAM}=`+a),t?"true":"false");n({redirectUrl:e=e.concat(`&${_.SAME_TAB_LAUNCH_SERP_PARAM}=`+s)})}else i=c.getExtensionURL(l.uiConstants.PRIVACY_PROMPT_SCREEN.HTML),c.updateTabUrl(r.tabId,i),n({cancel:!0})})},i._switchFocusToPortal=async function(){if(o.globals.BROWSER===o.constants.BROWSER_TYPE.EDGE_CHROMIUM){var e=l.constants.NORTON_SW_EXTENSION_IDS;const t=await E.getExtensionInstalledAndEnabledStatus(e);Object.keys(t).some(e=>!0===t[e])||(e=await E.getLandingPage(),n(e))||c.activateTab(e.id)}},i.handleInstall=function(e){let t=e.reason;l.isFreshInstall=!1;let n;"install"===t&&(l.isFreshInstall=!0,l.main.injectWebCommunication(),i._switchFocusToPortal()),l.init.ready().then(function(){var e=l.telemetryWrapper;switch(t){case"install":E.flavorizeExtension(),i.findAndStoreDateOfAssociation(),e.sendExtensionInstall(),l.globalSettings.getInstallDate(),l.uninstallSurveyHelper.initializeUninstallSurveyURL(),l.init.updateAntiTrackerStatus(),n=_.THEMES.BROWSER_THEME;break;case"update":i.findAndStoreDateOfAssociation(),e.sendExtensionUpdate(),l.NSSSHelper.isVendorMigrationDoneFFEdge()&&e.sendVendorMigrationPing(),l.globalSettings.getInstallDate(),l.uninstallSurveyHelper.initializeUninstallSurveyURL(),l.init.updateAntiTrackerStatus(),n=_.THEMES.LIGHT_THEME}l.globalSettings.isNewUserForHPNewFeatures()||(l.globalSettings.setIsNewUserForHPNewFeatures(!0),l.globalSettings.setDefaultDarkModeTheme(n),_.EXTENSION_TYPE===_.DEFAULT_SEARCH_EXTENSION&&l.globalSettings.setPreviousHPDarkModeTheme(_.THEMES.BROWSER_THEME),_.EXTENSION_TYPE===_.HOMEPAGE_EXTENSION&&A.notifyOtherExtensions())},function(e){a.error(e)})},i.handleMessage=function(e,t,n){var a=t.tab,s=e.message;switch(e.name){case"flavor-retrieved":E.setFlavor(a.url,s);break;case T.EXTN_SETTINGS_PAGE_LOADED_TELEMETRY:l.telemetryWrapper.sendSettingsPageLoadEvent();break;case T.UPDATE_EXTENSION_ICON:c.setBrowserIcon(e.options)}},i.actionCallback=async function(e){if(await l.init.ready(),o.globals.BROWSER!==o.constants.BROWSER_TYPE.FIREFOX||l.privacyPromptSettings.getPrivacyConsent()){let e;e=E.isDS()?c.getExtensionURL(r.SETTINGS_PAGE):c.getExtensionURL(r.HOME_PAGE),e+="?"+r.LAUNCHED_ON_EXTENSION_CLICK,c.createTab(e),l.telemetryWrapper.sendActionClickEvent()}},i.handleHPSettingsChangedExternal=async function(e){var t=e.payload[_.DARK_MODE_PARAM],e=e.payload[_.SAME_TAB_LAUNCH_SERP_PARAM];E.updateSERPTabUrls(t,e),await E.handleOmniSearch()},i.handleExternalMessage=function(e,t,n){var a=e.name,t=t.id;if(r.NORTON_EXTENSION_IDS.includes(t))switch(a){case r.GET_INSTALL_DATE:n({doi:S.getInstallDate()});break;case r.GET_ASSOCIATION_DATE:n({doa:S.getDateOfAssociation()});break;case l.uiConstants.MESSAGES.GET_INTERNAL_IDENTIFIER:var s=l.NSSSHelper.getCurrentExtensionIdentifier();""!==s&&n({internalIdentifier:s});break;case l.uiConstants.HP_SETTINGS_CHANGED_EXTERNAL:E.isDS()&&(c.isManifestV3Extension()?i.handleHPSettingsChangedExternal(e):d.updateUrlParamsOfAllMatchingUrls([c.getExtensionURL("/*")],e.payload))}},i._getSendersExtensionId=function(){var e=o.globals.BROWSER,t=r.PRODUCT_NAME;return n(e)||n(t)?null:r.EXTENSION_PAIR_IDS[t][e][r.VENDOR]},i._dateOfAssociationHelper=function(e){c.sendMessageExternal(e,{name:r.GET_INSTALL_DATE},e=>{let t=null;t=chrome.runtime.lastError||n(e)||n(e.doi)?(a.debug("getInstallDate - receiving end does not exists or response is null"),E.getNormalizedDateString(new Date)):e.doi;e=S.getInstallDate();S.setDateOfAssociation(e,t)})},i.isHPDarkModeHandler=function(){const e=r.NORTON_HP_EXTENSION_IDS[0];return new Promise(t=>{c.sendMessageExternal(e,{name:_.IS_HP_DARK_MODE_HANDLER},e=>{chrome.runtime.lastError||n(e)?(a.debug("isHPDarkModeHandler - receiving end does not exists or response is invalid"),t(null)):t(e)})})},i.findAndStoreDateOfAssociation=function(){var e=l.globalSettings.getDateOfAssociation();if(!t(e)){let t=i._getSendersExtensionId();n(t)||c.sendMessageExternal(t,{name:r.GET_ASSOCIATION_DATE},e=>{chrome.runtime.lastError||n(e)||n(e.doa)?(a.debug("getAssociationDate - receiving end does not exists or response is null"),i._dateOfAssociationHelper(t)):S.setDateOfAssociation(e.doa,e.doa)})}},i.initialize=async function(){c.isManifestV3Extension()&&!1===i.IS_HP&&await E.handleOmniSearch(),chrome.runtime.getPlatformInfo(function(e){"win"===e.os&&(i.isWindowsOS=!0)}),l.main.initVendorConstants(),i._canHandleTelemetryOptOut()&&l.main.handleTelemetryOptOut(),chrome.runtime.onMessage.addListener(i.handleMessage),c.addMessageExternalListener(i.handleExternalMessage),i._sendExtensionIdToSW(),c.isManifestV3Extension()||(chrome.browserAction.onClicked.addListener(i.actionCallback),l.isFreshInstall||l.init.updateAntiTrackerStatus(),!1===i.IS_HP&&chrome.webRequest.onBeforeRequest.addListener(i.handleOmniSearchEvent,{urls:[l.constants.SEARCH_URL+"?omnisearch=yes*"]},["blocking"]))},i._canHandleTelemetryOptOut=()=>o.globals.BROWSER!==o.constants.BROWSER_TYPE.FIREFOX||![_.HOMEPAGE_EXTENSION,_.DEFAULT_SEARCH_EXTENSION,_.THREE_IN_ONE].includes(_.EXTENSION_TYPE),i._sendExtensionIdToSW=function(){var e=l.NSSSHelper.getCurrentExtensionIdentifier();""!==e&&(e={name:l.uiConstants.MESSAGES.SEND_INTERNAL_IDENTIFIER,internalIdentifier:e},o.extensionAdapter.sendMessageExternal(r.NORTON_SW_EXTENSION_IDS[0],e,()=>{t(o.extensionAdapter.getLastError())&&a.debug("safeweb extension is not installed")}))},i._alarmHandler=async function(e){switch(await l.init.ready(),e){case s.ALARM_NAMES.QUICK_LINKS:l.quickLinksProvider.fetchDynamicQuickLinks();break;case s.ALARM_NAMES.TWITTER_FEEDS:l.twitterFeeds.fetchAndSaveTwitterFeeds();break;case s.ALARM_NAMES.TELEMETRY_NOTIFICATION:l.main.setTelemetryNotification();break;case s.ALARM_NAMES.FETCH_ANTI_TRACKER_STATUS:case s.ALARM_NAMES.PERIODIC_ANTI_TRACKER_SCHEDULER:l.antiTrackerStatusProvider.handleAntiTrackerScheduler(e)}},i._alarmCallback=e=>{i._alarmHandler(e.name)},i.load=async function(){c.isManifestV3Extension()&&chrome.action.onClicked.addListener(i.actionCallback),o.alarmHelper.registerAlarmListener(i._alarmCallback);try{await l.init.ready()}catch(e){a.error(e)}await i.initialize()},i.loadExtension=async()=>{c.isManifestV3Extension()||await d.waitForWindowLoadEvent(),await i.load()},i}(e.SymBfw,e.NSSS)}(executionContext),SymBfw.utils.isntNil(chrome.runtime.onInstalled)?chrome.runtime.onInstalled.addListener(NSSS.searchGlobal.handleInstall):(guid=NSSS.globalSettings.getValue(NSSS.constants.NSSS_INSTALLDATEKEY),SymBfw.utils.isNil(guid)&&setTimeout(function(){NSSS.searchGlobal.handleInstall({reason:"install"})},5e3)),NSSS.searchGlobal.loadExtension();