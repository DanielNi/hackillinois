var ref   = new Firebase('https://sweltering-fire-4327.firebaseio.com/');
var users = ref.child('users');

var auth = new FirebaseSimpleLogin(ref, function(error, user) { 
	if (error) { // an error occurred while attempting login
    	console.log(error);
  	} else if (user) { // user authenticated with Firebase
    	console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    	chrome
  		alert("logged in");
      
      var userid = user.id;
      if (!users.hasChild(userid)) {
  		  var userRef = users.child(userid);
  		  var friends = userRef.child('friends');
      }
  		
      FB.api(
        "/me/friends",
        function(response) {
          if (response && !response.error) {
          	alert("facebook api running");
            $.each(response.data, 
              function(i, v) {
                friends.child(v.name).set(v.id);
              }
            );
          }
        }
      );

  	} else { // user is logged out
  	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	alert("clicked");
	logIn();
	chrome.browserAction.setPopup(popup.html);
});

function logIn() {
	auth.login('facebook', {
 		rememberMe: true,
  	scope: 'user_friends,friends_photos'
	});
}