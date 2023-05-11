var executionContext=this;!function(e){"use strict";var{BROWSER_TYPE:{EDGE_CHROMIUM:t,CHROME:o}}=SymBfw["constants"];let a={TYPE:{KNOWNBAD:"knownbad",SUSPECTEDBAD:"suspectedbad",MALICIOUS:"malicious",MALICIOUSSHOP:"maliciousshop",IPS:"IPS",FORMJACK:"FORMJACK"},HTML:"blockedPage.html",parameterKeys:{ORIGINAL_URL:"originalURL",REPORT_URL:"reportURL",BLOCK_PAGE_TYPE:"blockPageType",ULANG:"ulang",CONTINUE_TO_SITE_URL:"continueToSiteURL"}},i={strings:["Safe Web","Scam Insight: Personal Information Risk","This site is safe, but…","It asks for personal information and is not well established with the Norton Community. Use caution when entering any of your information on this site. ","Visit ","Norton ","to learn more about personal information risk on Websites.","Age: ","Very New","This website was published very recently.","New","This website has been available for a short time.","Prevalence: ","No Users","No Norton community members have used this site.","Few Users","Very few Norton community members have used this site.","Continue to Site","Exit Site","If you think this website is categorized incorrectly, ","Report Issue."]};const r={strings:["Safe Web","BLOCKED BY","Possible credit card skimmer blocked!","Learn more","This web address may be associated with the illegal collection of credit card information by cyberthieves.","We strongly recommend you don't enter any information into this page:","Learn technical details","Accept risk and continue","Exit this page (recommended)"],learnMoreStrings:["LEARN MORE","About credit card skimmers and formjacking","What is formjacking?","Malicious actors can compromise online purchase sites in a variety of ways, skimming their checkout pages and stealing your credit or debit card information. This is known as formjacking.","How does formjacking work?","Help protect against cybercriminals' attacks","In the same way that a skimmer creates a fake front on an ATM or a public payment display, such as at a gas station, formjackers can hack into a website's back end. They can then insert code that creates a fake front on the site's payment page and capture your credit or debit card info.","Norton Safe Web's proprietary technology can help protect against formjacking while you shop online. ","We'll notify you if we detect that an e-commerce site has a compromised payment system, ","or if an e-commerce site you're purchasing from has a fake front on their payment page."],descText:"A known malicious website {0} has been embedded into this payment page and could re-route your credit card information.",HTML:"formjackProtectionBlockPage.html"};let n={strings:["Norton","Safe Search","Quick Links","Privacy","Search the Web Safely","Legal","Copyright © 2022 NortonLifeLock Inc. All rights reserved.","NortonLifeLock Latest Updates","Security & Privacy Center","Welcome to Norton Safe Search","Take a tour to see what has changed and make the most of your Safe Search features.","Start Tour","Peace of mind with every search","Norton Safe Search shows site safety ratings in your search results.","Get security updates and tips from Norton","Explore the latest security and privacy blogs from NortonLifeLock and learn more about digital safety.","A tour of Norton Safe Search is available in Settings.","Next","Done","The Quick Link you're trying to add is already provided for you.","Title","URL","Edit Your Quick Link","Add","Cancel","Save","Edit","Remove","Add Quick Link","Type a valid URL","Quick Links is all new!","Add your favorite sites to the new Quick Links bar.","Quick links to access popular sites with ease","Editable quick links"],googleApps:{}},s=(n.googleApps.strings={moreAppsText:"More Apps",tourStrings:{"Link to your apps":"Link to your apps","Access your apps quickly and easily from your Norton Home Page.":"Access your apps quickly and easily from your Norton Home Page.",Done:"Done"}},{strings:["Home Page","Safe Web","Safe Search","Safe Search Enhanced","Settings","Share Data with Norton","Share usage and error data anonymously with Norton and help us make our products even better","Privacy","Signed in as","Sign out","Link Guard","Identify unsafe links in Webmail, Facebook, and Twitter","Learn More","Start Tour","New"]}),c={strings:["You have successfully logged out of your NortonLifeLock Account","Sorry, something went wrong. Please try again."]},E={HTML:"content/ui/privacy-prompt.html",strings:["Norton Safe Web","Let us help protect you","To better understand our data collection policies, please visit our","Global Privacy Statement","Accept","Decline","Decline & Uninstall","Your Permission Is Required","Should you decline then Norton Safe Web will not work and won't be able to provide safety ratings for sites for you.","Please click below to review your permission and accept our request to collect the anonymous information you submit.","Review Your Permissions","Remove Norton Safe Web","Share usage and error data anonymously with Norton to help make our products and services even better.","Mozilla Firefox has updated its add-ons policy. Please give your permission again to continue using Norton Safe Search."],sw:{productName:"Norton Safe Web",description1:"Norton Safe Web must have permissions to access and collect the web addresses (urls) that you visit. ",description2:"This way, we can provide safety ratings that can help protect while browsing the Web.",declineText:"Should you decline, Norton Safe Web will not work and won't be able to provide safety ratings for sites for you.",uninstallDialogMessage:"\n Uninstalling Safe Web will mean that Norton will not be able to detect if sites are malicious and can't help protect you. We recommend clicking keep Installed and accepting permission for Safe Web to operate on your device. \n"},ds:{productName:"Norton Safe Search",description1:"Safe Search must have permission to collect the web addresses you search on, to determine if the sites are malicious before you visit them.",description2:"This will enable us to detect whether they are malicious, and will let us warn you before you access them.",declineText:"If you decline, Safe Search will not be able to help protect your device from malicious sites.",uninstallDialogMessage:"\n Uninstalling Safe Search will mean that Norton will not be able to detect if the site results you find are malicious, nor can we help protect you. We recommend clicking on Keep Installed and accepting permission for Safe Search to operate on your device.\n",protectText:"Search more safely, protect your device"},hp:{productName:"Norton Home Page",description1:"Home Page must have permission to access and collect the web addresses that you search on. ",description2:"This way, we can help detect whether these sites are malicious before you access them.",declineText:"If you decline, Home Page will not be able to help protect you from malicious sites.",uninstallDialogMessage:"\n Uninstalling Norton Home Page will mean that Norton will not be able to detect if the sites you search are malicious, nor can we help protect you. We recommend clicking Keep Installed and accepting permission for Home Page to operate on your device.\n",protectText:"Search more safely from your home page"},"three-in-one":{productName:"Norton Safe Search",description1:"Norton must have permission to access and collect the web addresses that you browse on the web, from your address bar, and your home page. ",description2:"This way, we can help detect whether the sites you searched are malicious before you access them, and provide you with safe search results.",declineText:"If you decline, Norton will not be able to help protect your device from malicious sites, nor will we be able to provide you with safe search results.",uninstallDialogMessage:"\n Uninstalling Norton Safe Search will mean that Norton will not be able to detect if the sites you search are malicious, nor we will be able to provide any safe search results for you. We recommend clicking on Keep Installed and accepting permission for Safe Search to operate on your device.\n",protectText:"Search more safely, protect your device"}};var d={EXISTING_USER:"existingUser",NEW_USER:"newUser"};let _={MESSAGES:{BLOCKEDPAGE_SEARCH:"93D3C1B6-E181-48DA-8841-EB995ADC5D48",BLOCKEDPAGE_INIT:"049B762D-F8CB-4BB1-93AB-F9D55E13D65E",BEFORE_UNLOAD_EVENT:"6D54B993-F098-4C47-B4CC-596C3D22E402",DOMEVENT:"4BEBC3FD-7552-4AE9-9FB1-717AA14B650A",SHOW_ANNOTATION_POPUP:"9BBDD5C9-4BAF-44EC-9F29-67AD5E2CF524",CLOSE_ANNOATION_POPUP:"47420986-DBE5-471F-8D64-64DCEBDF8541",FLAVOR_RETRIEVED:"554E40BF-48A3-416D-8988-9661B90F94CC",OPEN_DO_NOT_BLOCK_PAGE:"54E66C14-3E30-4F16-B4BC-259C662FF64B",HANDLE_UI_EVENTS:"B2C77321-D8F4-47A8-DCCF-D99BE95F4BC9",UPDATE_POPOVER_UI:"642A1139-910F-4D9A-B15F-12BBB6AA6276",SCAM_INSIGHT_BLOCKPAGE_INIT:"de656873-852a-4c10-8698-be4040be18ff",SCAM_EXIT_SITE:"da5f0029-7869-41af-bfc6-cd5138f13c07",SCAM_CONTINUE_TO_SITE:"9e7cd3d3-759c-49f6-87ae-4c49180d6118",SCAM_REPORT_ISSUE:"97d7cc47-bfdd-480e-9d28-0d069d965283",SET_TELEMETRY_ENABLED:"6213A0CF-075B-42BB-861A-0E54D62DE44E",SET_LINK_GUARD_ENABLED_NOTIFICATION:"F1E723C0-325B-4B40-8105-DE45FF866910",SETTINGS_PRIVACY_POLICY:"53E7B83C-CB55-463F-91B0-41F125589605",SIGN_OUT:"5CC02BA4-A79E-4451-B64A-B61217EC6B16",SETTINGS_PAGE_UI_INIT:"99534CCC-1303-4135-B98F-2B57FB3C2115",OPEN_IPS_LEARN_MORE_URL:"B63BF039-0BF2-4ED4-AD7F-61C482CF5E1D",UPDATE_FG_LINK_GUARD:"AC2A03CC-8755-48A8-9713-B37F8792056D",UPDATE_FG_VALUES:"96DD5DC7-E54C-4028-AA35-4E26C5EEED34",SET_DS_VENDOR:"051cc1e3-0abf-45de-97ea-318b8904104a",STORE_CLICK_PREVENTION_URL:"0F830272-E06E-4E97-BC06-4D2BD5DC8D9A",RETRIEVE_CLICK_PREVENTION_URL:"9EAC3837-7ECF-4C03-9A74-D848ECD9012C",ADD_TO_CLICK_PREVENTION_SAFELIST:"7A4A8585-40B8-406C-B63B-3CD865C58584",UNDO_CLICK_PREVENTION:"2E9E571E-93AA-468E-AC40-B451BE79B1C5",REDO_CLICK_PREVENTION:"890F7575-59ED-42D4-9DEE-D76FF84941F0",CLICK_PREVENTION_FAILURE_TELEMETRY:"D7FADF7A-4055-4005-82BC-3F75FE2C2ACB",FG_LEARN_MORE_LINK:"dff56850-8158-4b01-a3c3-12dacad9ec40",GET_HOME_PAGE_METADATA:"e4e8577d-7976-4bbf-ba6f-07a749055ec5",EXTN_HOME_PAGE_CHICKLET_CLICKED:"B379AF5D-9FE4-4EEF-AD39-6F846E2D1FA5",EXTN_HOME_PAGE_CHICKLET_SAVE_CLICKED:"E04BD857-F611-4143-884F-1D6C20F182A7",EXTN_HOME_PAGE_UPDATE_CUSTOM_CHICKLETS_LINKS:"896B1FD3-E70B-4DF3-8F8F-33763E3D9809",EXTN_HOME_PAGE_CHICKLET_TO_REMOVE:"53B69E14-A518-45EC-B583-2A88121E0463",EXTN_HOME_PAGE_SEARCH_SUGGESTION_CLICKED_TELEMETRY:"6D512FFF-A83B-4B47-ADAA-20EDB120CD9F",EXTN_HOME_PAGE_SEARCH_BUTTON_CLICKED_TELEMETRY:"C335B6F1-8FCE-44C5-9016-2AC8270301EB",EXTN_HOME_PAGE_LOADED_TELEMETRY:"9E2E8EF4-DB13-40ED-89A1-742852A9DD17",EXTN_SETTINGS_PAGE_LOADED_TELEMETRY:"60343FBA-DDF4-401F-9262-D8C6FCA1D6B5",LAUNCH_SEARCH_TAB_WITH_URL:"6ABBBAED-6E04-4B97-A95B-435D84AE7505",GET_INTERNAL_IDENTIFIER:"fe1ddbad-808a-4d79-bcdd-6d22e2927e97",SEND_INTERNAL_IDENTIFIER:"27e166ee-48a1-4323-ad53-5e398bdf0d8f",LAUNCH_SETTINGS_PAGE:"CAC12841-6D25-4079-A72A-42B2D952BB79",BACKGROUND_SCRIPT_LOADED:"48e97d22-e7a6-4bc0-af9e-94d88ff183d6",SHOULD_SHOW_HP_KEEP_ASSIST_POPUP:"0b0ca639-62c7-4102-879d-5cfe25fe4c29",SHOULD_SHOW_DS_KEEP_ASSIST_POPUP:"0dcb230f-23e7-4381-ba9d-356b585fea83",CLOSE_KEEP_ASSIST_UI:"de5136ec-11a1-4912-9f9f-c12372f1cdae",KEEP_ASSIST_UI_INIT:"13d25c2b-9131-4c13-953b-d1a2afae0b18",DONE_BUTTON_CLICKED:"02ed873b-f533-40bf-a5e1-6c20cdfc98b2",KEEP_ASSIST_SHOWN:"ed5488de-abf0-41a4-94ef-9e18af537066",OPEN_LEGAL_PAGE:"e46c5d2e-846e-447e-922f-4ec8934d4af4",GET_VENDOR:"d2abce22-27da-4122-94ee-c277494082a6",EXTN_HOME_PAGE_ENGLISH_ONLY_HP_SHOWN_TELEMETRY:"E6E728A3-24E1-48FF-BB97-124492C0D0DE",EXTN_HOME_PAGE_TWEET_ITEM_CLICKED:"C467AE5D-48FA-4A5B-B7DF-710C6B859B32",EXTN_HOME_PAGE_SECURITY_CENTER_NEWS_ITEM_CLICKED:"793C067F-6E5A-45A5-B8E1-365533384D05",SET_SHOW_SECURITY_CENTER_SECTION_VALUE:"6e01fb7b-174b-4a0f-808b-8b1767f83dfb",SET_SHOW_TWITTER_SECTION_VALUE:"340d7d54-5206-4a6b-8626-6e0556208931",START_HOME_PAGE_TOUR:"3E8A4897-90E1-41A6-83E7-55AD23374BB4",HOME_PAGE_TOUR_FINISHED:"1A57CC55-D8E6-41B3-B43C-A5277D248B90",HOME_PAGE_TOUR_KEY_PRESSED_FOR_CANCEL:"ad724e8e-cc19-445d-96e5-6961df21ba41",HOME_PAGE_TOUR_KEY_PRESSED_FOR_NEXT:"6f7f4f07-6db0-46ba-bc6f-5c9ce0b34059",CUSTOM_QUICK_LINK_TRIGGER_EVENT:"04d7e66e-0c38-4494-ace7-7850102b4c97",CUSTOM_QUICK_LINK_FAILURE:"df4843ac-e61c-40d1-b957-dd7a60ab4868",CUSTOM_QUICK_LINK_TOUR_FINISHED:"6026950A-4EA9-41F5-BC22-5D6BDB580ACE",PRIVACY_PROMPT_SCREEN_UI_INIT:"cbb8971e-963a-4f71-9b16-b560de122867",ON_PRIVACY_CONSENT_ACCEPT:"E43EEFB7-DEAD-4346-B214-F05EAD311786",ON_PRIVACY_CONSENT_DECLINE:"17F71FD7-9CFA-4351-86B2-12D14A5C104C",ENABLE_ALL_FLOW_FROM_PORTAL:"CE6526AB-1B8E-4E2D-84C7-04B39F04755D",OPEN_GLOBAL_PRIVACY_PAGE:"A40E3D55-068D-4902-BC0B-1AEC35CC424E",REMOVE_NSW_CLICKED:"7E455748-157F-4FDB-A5CD-63F0A3F0BBB2",ENABLE_ALL_COMMUNICATION_LISTENER_ADDED:"713ECFCB-F442-40B3-802B-661DE44C72A0",SEND_TELEMETRY_HOMEPAGE:"b82e9a05-e902-40e9-bde7-759db67dddfb",UPDATE_EXTENSION_ICON:"84011348-554B-46A0-A6C1-C7C4DE6DB28B",EXTENSION_INSTALLATION_TRIGGERED:"aa5fc70a-1979-4684-97f1-a4fbe8bc7ad5",EXTENSION_ENABLE_FLOW_TRIGGERED:"a9eac864-f2f5-4fd9-825e-962bfffa4596",LOAD_STORE_URL:"71c5234a-6dae-48a0-b5c0-7a088e1ca022",CLOSE_STORE_PAGE:"803eefc4-40ef-445e-8a6e-a072e5db04f3",GET_EXTENSIONS_STATUS:"2316b873-1c22-4470-a66a-739ed1af1b5d",EXTENSION_INSTALLED_RESPONSE:"3dc56984-701c-41fa-864f-f93d2cc08dca",CC_TELEMETRY_CAPTURE_NETWORK_CALLS:"4856CB31-43BD-4EC6-98BA-981B60CDEA9D",GET_PRIVACY_CONSENT_ACKNOWLEDGEMENT_STATUS:"4576b88b-9bd3-4a80-88f6-0efe1b545084",GOOGLE_APP_CLICKED:"C679AFTR-9FF6-4EGT-AD67-6F857F2D1FA4",MORE_GOOGLE_APPS_CLICKED:"b4a0bb95-20fe-4839-afda-569b74c048ed",GOOGLE_APPS_POPUP_SHOWN:"fab33274-8a50-42e1-a640-8d41c9eda833",FORMJACK_PROTECTION_MONITOR_NETWORK_CALLS:"5e4c1418-f828-433d-a282-702d7e390b49",FORMJACK_BLOCKPAGE_INIT:"a4b68533-7679-4473-b121-6489958b15b3",FORMJACK_CONTINUE_TO_SITE:"47f641ccb66f42e4af12112265fd91c7",FORMJACK_LEARN_MORE_LINK_CLICK:"b5a65793-8258-4282-ba3a-dc581ca52e52",FORMJACK_LEARN_TECHNICAL_DETAILS_CLICK:"929c9862-2e0f-478a-9790-3e1eb943a952",FORMJACK_EXIT_PAGE:"21c397aa-6181-488f-8204-1a40c3eef67e",FORMJACK_TOUR_UI_INIT:"cf3508b1-a9ce-4474-aac9-d74fc3980be5",FORMJACK_TOUR_CLOSE_BUTTON_CLICKED:"41de4468-0242-478c-b7cf-7351c276db57",FORMJACK_TOUR_UI_SHOWN:"9b85d40b-168e-483e-8ab4-75146ef780c8",FORMJACK_TOUR_LEARN_MORE_LINK_CLICKED:"979aceea-5385-4cda-a7be-4d66ceba4ef8",FORMJACK_PROTECTION_LEARN_MORE_UI_INIT:"b0bcb28c-e469-4a4c-a8b9-f2eebbb1de6f"},BLOCKPAGE:a,SCAM_INSIGHT_BLOCK_PAGE:i,SETTINGS_UI:s,BROWSER_NOTIFICATION:c,HOMEPAGE:n,PRIVACY_PROMPT_SCREEN:E,KEEP_ASSIST_UI:{[o]:{title:"Welcome to {0}",keepText:"Keep It",keepButtonText:"Keep it"},[t]:{title:"Thanks for choosing {0}",keepText:"Keep Changes",keepButtonText:"Keep changes"},descriptionTextEdge:"Once you've installed the browser extension, click {1}, if prompted by Microsoft Edge, to preserve your {0}.",hp:{description1:"Thanks for choosing NortonLifeLock.",description2:"If a Chrome message appears at the top of the screen, click the {1} button to preserve your {0} in Chrome."},ds:{description1:"Thank you for choosing NortonLifeLock.",description2:"Maintain your {0} protection in Chrome by clicking the {1} button if a Chrome message appears at the top of the screen."},done:"Done"},FORM_JACK_PROTECTION_BLOCK_PAGE:r,FORMJACK_TOUR_UI:{HTML:"content/ui/formjackTour.html",[d.EXISTING_USER]:{header:{title:"New feature from Norton Safe Web!",description:"Protection from Formjacking"},tiles:{creditCard:{description:"Norton Safe Web can help you avoid formjacking while you shop online."},paymentAlert:{description:"We'll notify you if we detect that the site you're buying from has a compromised payment system."}},footer:{description:"What is formjacking?",linkText:"Learn More"}},[d.NEW_USER]:{header:{title:"Norton Safe Web",description:"Thanks for installing",descriptionSuffix:"Norton Safe Web!",subDescription:"Take advantage of all these great features:"},tiles:{websiteRatings:{title:"Website Ratings",description:"Our website ratings will let you know if a site is safe or if you should be cautious before providing it with your data."},intrusionPrevention:{title:"Intrusion Prevention",description:"Norton Safe Web helps protect against known bugs and cyberthreats in popular browsers."},formjackPrevention:{title:"Formjacking Prevention",description:"Norton Safe Web will notify you if it detects an e-commerce site has a compromised payment system."},websiteBlocking:{title:"Website Blocking",description:"Norton Safe Web notifies you, then helps block malicious sites before you click."},antiPhishing:{title:"Anti-Phishing Protection",description:"This feature lets you know if the site you're clicking on is officially certified, not a phishing site."},linkGuard:{title:"Link Guard",description:"Scans webmail and social media feeds for links that are suspicious or malicious."}}}},EXTENSION_TYPE:"ds",SAFEWEB_EXTENSION:"sw",TWO_IN_ONE:"2in1",THREE_IN_ONE:"three-in-one",HOMEPAGE_EXTENSION:"hp",DEFAULT_SEARCH_EXTENSION:"ds",BROWSER_NOTIFICATION_IMAGE:"../../Icon-48.png",HomepageTourSteps:{WELCOME_DIALOG:"welcome_dialog",SEARCH_BOX:"search_box",STATIC_CHICKLETS:"static_chicklets",CUSTOM_CHICKLETS:"custom_chicklets",TWITTER_FEEDS:"twitter_feeds",SECURITY_CENTER_FEEDS:"security_center_feeds",SETTINGS_ICON:"settings_icon",GOOGLE_APPS:"google_apps"}};_.ChickletsTourStepsData={id:"chickeltTour",start:_.HomepageTourSteps.STATIC_CHICKLETS,[_.HomepageTourSteps.STATIC_CHICKLETS]:{positionCSS:" tooltip-position-static-chicklets ",pageNumberText:"1/2",nextStep:_.HomepageTourSteps.CUSTOM_CHICKLETS,descriptionText:"Quick links to access popular sites with ease",buttonText:"Next"},[_.HomepageTourSteps.CUSTOM_CHICKLETS]:{positionCSS:" tooltip-position-custom-chicklets ",pageNumberText:"2/2",nextStep:null,titleText:"Editable quick links",descriptionText:"Add your favorite sites to the new Quick Links bar.",buttonText:"Done"}},_.KEY_CODES={ENTER:13},_.formjackTour={TOUR_TYPE:d,TOUR_TYPE_PARAM:"tour_type"},_.formjackTourData={[d.NEW_USER]:{windowStyle:{container:"formjack-tour-container-new-user",imageWrapper:"formjack-tour-image-new-user",image:"img-formjack-tour-image"},tileStyle:{container:"formjack-tour-tiles-container-new-user",wrapper:"formjack-tour-tile-wrapper-new-user",textWrapper:"formjack-tour-tile-text-wrapper-new-user",image:"formjack-tour-tile-image-new-user",description:"formjack-tour-tile-description-new-user",title:"formjack-tour-tile-title-new-user"},headerStyle:{container:"formjack-tour-header-container-new-user",titleWrapper:"formjack-tour-header-title-wrapper-new-user",title:"formjack-tour-header-title-new-user",descriptionWrapper:"formjack-tour-header-title-description-wrapper",description:"formjack-tour-header-title-description-new-user",descriptionSuffix:"formjack-tour-header-title-description-suffix-new-user",subDescription:"formjack-tour-header-title-sub-description-new-user"},tilesData:[{image:"formjack-tour-wrs-tile",tag:"websiteRatings"},{image:"formjack-tour-ips-tile",tag:"intrusionPrevention"},{image:"formjack-tour-fj-tile",tag:"formjackPrevention"},{image:"formjack-tour-block-tile",tag:"websiteBlocking"},{image:"formjack-tour-lg-tile",tag:"linkGuard"},{image:"formjack-tour-phish-tile",tag:"antiPhishing"}]},[d.EXISTING_USER]:{windowStyle:{container:"formjack-tour-container",imageWrapper:"formjack-tour-image",image:"img-formjack-tour-image"},tileStyle:{container:"formjack-tour-tiles-container",wrapper:"formjack-tour-tile-wrapper",textWrapper:"formjack-tour-tile-text-wrapper",image:"formjack-tour-tile-image",description:"formjack-tour-tile-description",title:"formjack-tour-tile-title"},headerStyle:{container:"formjack-tour-header-container",titleWrapper:"formjack-tour-header-title-wrapper",title:"formjack-tour-header-title",descriptionWrapper:"formjack-tour-header-title-description-wrapper formjack-tour-header-title-description-wrapper-existing-user",description:"formjack-tour-header-title-description",subDescription:"formjack-tour-header-title-sub-description"},tilesData:[{image:"formjack-tour-cc-tile",tag:"creditCard"},{image:"formjack-tour-alert-tile",tag:"paymentAlert"}]}},(e.NSSS=e.NSSS||{}).uiConstants=_}(executionContext),function(e){const o={LIGHT_THEME:"light",DARK_THEME:"dark"},{extensionAdapter:a,darkModeHandlerCS:i}=e.SymBfw,{MESSAGES:r}=e.NSSS["uiConstants"];(e.NSSS=e.NSSS||{}).nsssDarkMode=new class{constructor(){this._currentIconTheme=void 0,this._onDarkModeChange=this._onDarkModeChange.bind(this)}updateExtensionIcon(){var t=i.isDarkModeEnabled();if(!(t&&this._currentIconTheme===o.DARK_THEME||!t&&this._currentIconTheme===o.LIGHT_THEME)){let e=null;e=t?(this._currentIconTheme=o.DARK_THEME,{32:"Icon-dark-32.png"}):(this._currentIconTheme=o.LIGHT_THEME,{32:"Icon-32.png"}),a.sendMessage({name:r.UPDATE_EXTENSION_ICON,options:{path:e}})}}_onDarkModeChange(e){NSSS.nsssDarkMode.updateExtensionIcon()}_setDarkModeChangeListeners(){SymBfw.uiUtils.isTopLevelWindow()&&(this.updateExtensionIcon(),i.addDarkModeChangeListener(this._onDarkModeChange),window.addEventListener("unload",function(){i.removeDarkModeChangeListener(this._onDarkModeChange)}))}},e.NSSS.nsssDarkMode._setDarkModeChangeListeners()}(executionContext);