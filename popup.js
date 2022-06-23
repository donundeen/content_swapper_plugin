/*

tute here: https://developer.chrome.com/extensions/getstarted

*/




let pullText = document.getElementById('pullText');
let setText  =  document.getElementById('setText');
let pullImg  = document.getElementById('pullImg');
let setImg   =  document.getElementById('setImg');

chrome.storage.sync.get('color', function(data) {
});



/*
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};
*/

pullText.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      /*
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "pulltext.js"});
          */
      chrome.scripting.executeScript({
        files: ["jquery-3.5.1.min.js","pulltext.js"],
        target : {tabId : tabs[0].id}
      });
    });
};


setText.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      /*
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "settext.js"});
          */
      chrome.scripting.executeScript({
        files: ["jquery-3.5.1.min.js","settext.js"],
        target : {tabId : tabs[0].id}
      });
    
    });
};


pullImg.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      /*
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "pullimg.js"});
      */
      chrome.scripting.executeScript({
        files: ["jquery-3.5.1.min.js","pullimg.js"],
        target : {tabId : tabs[0].id}
      });
    });
};


setImg.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      /*
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "setimg.js"});
      */
      chrome.scripting.executeScript({
        files: ["jquery-3.5.1.min.js","setimg.js"],
        target : {tabId : tabs[0].id}
      });
    });
};

