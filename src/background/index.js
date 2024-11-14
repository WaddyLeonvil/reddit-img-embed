chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url?.includes('reddit.com') &&
    tab.url?.includes('comments')
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['src/contentScript/index.js.js'],
    })
  }
})
