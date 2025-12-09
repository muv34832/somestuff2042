// Detect TikTok upload URLs and notify content scripts
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {


        chrome.tabs.query({}, (tabs) => {
            for (const tab of tabs) {
                chrome.tabs.sendMessage(tab.id, {
                    type: "UPLOAD_DETECTED",
                    url: details.url
                });
            }
        });
    },
    {
        urls: ["*://*.tiktokcdn-eu.com/upload/v1/*"]
    }
);
