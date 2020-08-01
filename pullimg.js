/*
pull text from this page
// add jquery: https://carl-topham.com/articles/creating-a-chrome-extension-that-uses-jquery-to-manipulate-the-dom-of-a-page/
*/


(function(){
	let images = document.getElementsByTagName("img");
	console.log(images.length);
	let srcs = [];
	for(var i = 0; i < images.length; i++){
	    let image = images[i];
	    if(image.src.match(/^http/)){
	//       console.log("+++"+image.src+"+++");
	       srcs.push(image.src);
	    }
	}

	chrome.storage.local.set({imgContent: srcs}, function(){
		console.log("img content stored");
	})

})();


