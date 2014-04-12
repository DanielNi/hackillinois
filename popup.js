document.addEventListener('DOMContentLoaded', function () {
  alert("loaded");
});

chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
});
