//https://developer.chrome.com/extensions/webNavigation#event-onBeforeNavigate
//Example: https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/webNavigation/basic/navigation_collector.js
//import * as chrome from 'chrome';
import * as urlparser from 'url-parse';

class ExtensionNavigation {
    constructor(){
    
    let mainUrlFilter: chrome.events.UrlFilter = {
        hostContains: ".mopotabimport."
    } 
    let filter:chrome.webNavigation.WebNavigationEventFilter = {
        url: [mainUrlFilter]            
    };
    chrome.webNavigation.onBeforeNavigate.addListener(
        this.beforeNavigation,
        filter
            );

    }

    beforeNavigation(details:chrome.webNavigation.WebNavigationCallbackDetails): void{
        if(details.url){
            let parsedUrl = urlparser.default(details.url);
            let queryStringComponents = parsedUrl.query;
            
        }
    }
}
