/*
pull text from this page
// add jquery: https://carl-topham.com/articles/creating-a-chrome-extension-that-uses-jquery-to-manipulate-the-dom-of-a-page/
*/


(function($){
	let textContent = "";

	var i = 0;
	$(":contains('')").filter(":visible").contents().filter(function() {  
	    return this.nodeType == 3
	}).each(function(){
	  i++;
	  let length = this.textContent.length;
	  if(this.textContent.trim() !== ""){
	    textContent += " " + this.textContent;
	  }
	});

	textContent = textContent.replace(/\s+/g, " ");

	chrome.storage.local.set({textContent: textContent}, function(){
		console.log("text content stored");
	})

	//console.log(textContent);
	//document.body.style.backgroundColor = "blue";
})(jQuery);


