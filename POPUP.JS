document.getElementById('blockButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, { action: 'blockVideos' });
      } else {
        console.error('Unable to communicate with the content script. Make sure it is injected into the current tab.');
      }
    });
  });
  