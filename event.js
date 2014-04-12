// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
//     if (changeInfo.status === 'complete') {
//         chrome.tabs.executeScript(tabId, {
//             code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
//                   '     alert("Cat not found!");' +
//                   ' }'
//         });
//     }
// });

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      alert(tabs[0].url);
   }
);