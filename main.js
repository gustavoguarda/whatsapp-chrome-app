var webview = document.querySelector("webview");

webview.addEventListener('permissionrequest', function (e) {
  if (e.permission === 'download') {
    e.request.allow();
  }
  if (e.permission === 'media') {
    e.request.allow();
  }
  if (e.permission === 'fullscreen') {
    e.request.allow();
  }
});

webview.addEventListener('newwindow', function (e) {
  e.preventDefault();
  window.open(e.targetUrl, '_blank');
});

chrome.app.window.current().onBoundsChanged.addListener(function () {
  webview.style.height = chrome.app.window.current().innerBounds.height + "px";
  webview.style.width = chrome.app.window.current().innerBounds.width + "px";
});

webview.style.height = document.documentElement.clientHeight + "px";
webview.style.width  = document.documentElement.clientWidth + "px";