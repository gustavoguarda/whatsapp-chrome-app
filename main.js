var webview = document.querySelector("webview");

webview.addEventListener('permissionrequest', function (e) {
  if (e.permission === 'download') {
    e.request.allow();
  }
  if (e.permission === 'media') {
    e.request.allow();
  }
});

webview.addEventListener('newwindow', function (e) {
  e.preventDefault();
  window.open(e.targetUrl, '_blank');
});

webview.style.height = document.documentElement.clientHeight + "px";
webview.style.width  = document.documentElement.clientWidth + "px";
window.onresize      = updateWebviews;