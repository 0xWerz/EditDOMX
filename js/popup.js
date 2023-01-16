document.getElementById("save-button").addEventListener("click", function () {
  var className = document.getElementById("class-name").value;
  var contentName = document.getElementById("content-name").value;
  chrome.storage.sync.set({ className: className, contentName: contentName }, function () {
    document.getElementById("status").innerHTML = "Changes saved. Please refresh the page to see the changes.";
  });
});

document.getElementById("reset-button").addEventListener("click", function () {
  chrome.storage.sync.clear(function () {
    document.getElementById("status").innerHTML = "Changes reset. Please refresh the page to see the changes.";
  });
});