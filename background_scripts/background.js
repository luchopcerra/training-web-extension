const searchEngine = new SearchEngineConnector();

browser.browserAction.onClicked.addListener((tab) => {
    // disable the active tab
    //browser.browserAction.disable(tab.id);
    // requires the "tabs" or "activeTab" permission
    //console.log(tab.url);
    console.log("click")
    browser.runtime.onMessage.addListener(message => {
      let words = message.words;
      if (!words){
        // no words
      } else {
        searchEngine.lookUpFor(words)
          .then(data=>console.log(data))
          .catch(reason=>console.error(reason.message))
      }
    });
  });