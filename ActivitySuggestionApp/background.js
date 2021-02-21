chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

    const url = "https://www.boredapi.com/api/activity?participants=1";

    if(msg.name === "fetchTask") {
        fetch(url)
            .then(response => response.json())
            .then(data => sendResponse(data))
            .catch(error => alert("Something went wrong!!" + error));
            return true;
    }
})