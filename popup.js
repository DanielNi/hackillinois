document.addEventListener('DOMContentLoaded', function () {
  alert("loaded");
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
