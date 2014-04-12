document.addEventListener('DOMContentLoaded', function () {
  alert("loaded");
  document.getElementById('alertButton').addEventListener('click', onLoginButtonClicked);
});

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

// var facebookAuth = new OAuth2('facebook', {
//   client_id: '768415276511807',
//   client_secret: '28e40d0bc03186cdfbd97552891f4a17',
//   api_scope: 'basic_info'
// });

// facebookAuth.authorize(function() {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function(event) {
//     if (xhr.readyState == 4) {
//       if(xhr.status == 200) {
//         var parsed = JSON.parse(xhr.responseText);
//         var html = '';
//         parsed.data.forEach(function(item, index) {
//           html += '<li>' + item.name + '</li>';
//         });
//         document.querySelector('#friends').innerHTML = html;
//         return;
//       } else {
//         //request failure
//       }
//     }
//   }
// });

// xhr.open('GET', 'https://graph.facebook.com/me/picture', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('Authorization', 'OAuth ' + facebook.getAccessToken());

// xhr.send();