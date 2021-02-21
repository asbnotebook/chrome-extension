//send message to background
chrome.runtime.sendMessage({name: "fetchTask"}, (response) => {

    console.log("Response: " + JSON.stringify(response));

    document.querySelector('.loader').style.display = "none";
    document.querySelector('p').innerHTML=response.activity;
    if(response.link != '' || response.link != null){
        document.querySelector('a').href=response.link;
        document.querySelector('a').innerHTML=response.link;
        document.querySelector('a').target="_blank";
    }
})
