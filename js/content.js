function checkAndEditDOM(xpath, newContent) {
    var elements = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    if (elements.snapshotLength > 0) {
        for (var i = 0; i < elements.snapshotLength; i++) {
            elements.snapshotItem(i).innerHTML = newContent;
        }
        return "XPath found and edited successfully!";
    } else {
        return "XPath not found on the current page.";
    }
}

function refreshPage() {
    location.reload();
}

chrome.storage.sync.get(["xpath", "contentName"], function (data) {
    var xpath = data.xpath;
    var newContent = data.contentName;
    if (xpath && newContent) {
        var response = checkAndEditDOM(xpath, newContent);
        document.getElementById("status").innerHTML = response;
    }
});
