function checkAndEditDOM(className, newContent) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = newContent;
        }
        return "Class name found and edited successfully!";
    } else {
        return "Class name not found on the current page.";
    }
}

function refreshPage() {
    location.reload();
}

chrome.storage.sync.get(["className", "contentName"], function (data) {
    var className = data.className;
    var newContent = data.contentName;
    if (className && newContent) {
        var response = checkAndEditDOM(className, newContent);
        document.getElementById("status").innerHTML = response;
    }
});

