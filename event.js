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
      // alert(tabs[0].url);
  	}
  );

// var successURL = 'https://www.facebook.com/connect/*';
// //close tab after redirect to success
// function onFacebookLogin() { // doesn't work yet
//     if (localStorage.accessToken) {
//         chrome.tabs.query({url: successURL}, function(tabs) {
//             chrome.tabs.remove(0);
//         });
//     }
// }
// chrome.tabs.onUpdated.addListener(onFacebookLogin);

// window.fbAsyncInit = function() {
// 	FB.init({
// 		appId      : '{your-app-id}',
// 		status     : true,
// 		xfbml      : true
// 	});
// };

// (function(d, s, id){
// 	var js, fjs = d.getElementsByTagName(s)[0];
// 	if (d.getElementById(id)) {return;}
// 	js = d.createElement(s); js.id = id;
// 	js.src = "https://connect.facebook.net/en_US/all.js";
// 	fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// window.fbAsyncInit = function() {
//         // init the FB JS SDK
//         FB.init({
//             appId: 'APP_ID', // App ID from the App Dashboard
//             //channelUrl : '//www.example.com/', // Channel File for x-domain communication
//             status: true, // check the login status upon init?
//             cookie: true, // set sessions cookies to allow your server to access the session?
//             xfbml: true  // parse XFBML tags on this page?
//         });

//         // Additional initialization code such as adding Event Listeners goes here
//         console.log(FB);

//     };

//     // Load the SDK's source Asynchronously
//     (function(d, debug) {
//     	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//     	if (d.getElementById(id)) {
//     		return;
//     	}
//     	js = d.createElement('script');
//     	js.id = id;
//     	js.async = true;
//     	js.src = "https://connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
//     	ref.parentNode.insertBefore(js, ref);
//     }(document, /*debug*/false));


var ref = new Firebase('https://sweltering-fire-4327.firebaseio.com/');
var users = ref.child('users');

var auth = new FirebaseSimpleLogin(ref, function(error, user) { 
	if (error) { // an error occurred while attempting login
    	console.log(error);
  	} else if (user) { // user authenticated with Firebase
    	console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  		var userid = user.id;
  		var userRef = users.child(userid);
  		var friends = userRef.child('friends');
  		var hasVisited = userRef.child('hasVisited');

  		// facebook API shjit
  	} else { // user is logged out
  	}


});

function onLoginButtonClicked() {
	auth.login('facebook', {
 		rememberMe: true,
  		scope: 'user_friends'
	});
}