
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login').addEventListener('click', function() {
      alert("test");
        var newURL = "http://localhost:8000/test.html";
        chrome.tabs.create({ url : newURL});
    });
     
      alert("testing");
    
    document.getElementById('addButton').addEventListener('click', function() {
      alert("test");
      add();
    });  
});

function add() {
  alert("add");
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tab) {
    var hashed = CryptoJS.MD5(tab[0].url);
    ref.child(hashed).child(userid).set(tab.url);
  });
}

chrome.tabs.getSelected(null, function(tab) {
  document.getElementById('currentLink').innerHTML = tab.url;
});

if (localStorage.accessToken) {
  var graphUrl = "https://graph.facebook.com/me?" + localStorage.accessToken + "&callback=displayUser";
  console.log(graphUrl);

  var script = document.createElement("script");
  script.src = graphUrl;
  document.body.appendChild(script);

  function displayUser(user) {
    console.log(user);
  }
}



function getUserPicURL(id) {
  var str1 = "http://graph.facebook.com/";
  var str2 = str1.concat(id);
  var str3 = "/picture";
  var str4 = str2.concat(str3);
  return str4;
}


// xhr.open('GET', 'https://graph.facebook.com/me/picture', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('Authorization', 'OAuth ' + facebook.getAccessToken());

// xhr.send();