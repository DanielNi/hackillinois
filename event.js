chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	function(tabs){
      // alert(tabs[0].url);
  	}
  );

var ref   = new Firebase('https://sweltering-fire-4327.firebaseio.com/');
var users = ref.child('users');

var auth = new FirebaseSimpleLogin(ref, function(error, user) { 
	if (error) { // an error occurred while attempting login
    	console.log(error);
  	} else if (user) { // user authenticated with Firebase
    	console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  		
      var userid = user.id;
      if (!users.hasChild(userid)) {
  		  var userRef = users.child(userid);
  		  var friends = userRef.child('friends');
      }
  		
      FB.api(
        "/me/friends",
        function(response) {
          if (response && !response.error) {
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

function onLoginButtonClicked() {
	auth.login('facebook', {
 		rememberMe: true,
  	scope: 'user_friends,friends_photos'
	});
}