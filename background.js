chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        let idArray = [];
        chrome.tabs.onActivated.addListener((tab) => {
            console.log(tab.tabId);
            if (!idArray.includes(tab.tabId)) {
                idArray.push(tab.tabId);
                function onError() {
                    console.log("Error");
                }
                setTimeout(() => {
                    chrome.tabs
                        .sendMessage(tab.tabId, message)
                        .then((response) => {
                        })
                        .catch(onError);
                }, 20000);

            }

        })
    }
);


