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

// var successURL = 'https://www.facebook.com/connect/login_success.html';
// function onFacebookLogin() {
//                 if (!localStorage.accessToken) {
//                     chrome.tabs.getAllInWindow(null, function(tabs) {
//                         for (var i = 0; i < tabs.length; i++) {
//                             if (tabs[i].url.indexOf(successURL) == 0) {
//                                 var params = tabs[i].url.split('#')[1];
// 				access = params.split('&')[0]
//                                 console.log(access);
//                                 localStorage.accessToken = access;
//                                 chrome.tabs.onUpdated.removeListener(onFacebookLogin);
//                                 return;
//                             }
//                         }
//                     });
//                 }
//             }
//             chrome.tabs.onUpdated.addListener(onFacebookLogin);