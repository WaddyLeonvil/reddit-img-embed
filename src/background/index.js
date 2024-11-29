let on = true

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url?.includes('reddit.com') &&
    tab.url?.includes('comments') &&
    on
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['src/contentScript/index.js.js'],
    })
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'turn_on') {
    on = true
  } else if (message.action === 'turn_off') {
    on = false
  }
})
