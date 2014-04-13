

document.addEventListener('DOMContentLoaded', function () {
  logIn();
});

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('alertButton').addEventListener('click', logIn());
// });

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