!function(S){"use strict";const t=NSSS.constants,n=NSSS.helperUtils;var e=t.SEARCH_RESULT_METADATA.yahoo;const r=t.SEARCH_RESULT_METADATA.ask;e.separator;const{isString:s}=SymBfw["utils"],A=NSSS["globalSettings"];(S.NSSS=S.NSSS||{}).searchQuery=new class{launchTabwithSearchQuery(S){let e="",a="";NSSS.constants.VENDOR===NSSS.constants.IAC&&(a=r.searchUrl,e=this._getParamsForAskHomePage(S));S=""+a+e;SymBfw.extensionAdapter.createTab(S)}_getParamsForAskHomePage(S){var e=new URLSearchParams(n.getQueryTemplate(NSSS.constants.DHP_OCODE)),a=SymBfw.localizer.getNavigatorLanguage().replace("-","_"),S=(e.append(t.URL_PARAMS_KEY.IAC_QUERY,S),e.append(t.URL_PARAMS_KEY.GEO_CODE,a),e.append(t.URL_PARAMS_KEY.CUSTOMER_TYPE,""),e.append(t.BROWSER,NSSS.NSSSHelper.getBrowserValue()),e.append(t.PROD,NSSS.uiConstants.EXTENSION_TYPE.toUpperCase()),e.append(t.URL_PARAMS_KEY.INSTALL_SOURCE,NSSS.NSSSHelper.getInstallSource()),e.append(t.URL_PARAMS_KEY.CAMPAIGN_NAME,NSSS.NSSSHelper.getCampaignCode()),A.getTrackValue());return s(S)&&e.append(t.URL_PARAMS_KEY.TRACK,A.getTrackValue()),e.toString()}}}(executionContext);