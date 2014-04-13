
var ref   = new Firebase('https://sweltering-fire-4327.firebaseio.com/');

chrome.webNavigation.onCommitted.addListener(function(tab) {
  alert("watch " + userid);
  var hashed = CryptoJS.MD5(tab.url);
  ref.child(hashed).child(userid).set(tab.url);
});


