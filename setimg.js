

//chrome.storage.sync.get('textContent', function(data) {
(function(){
	chrome.storage.local.get('imgContent', function(data) {
	  var srcs  = data.imgContent;


		replaceImages();
		setInterval(replaceImages, 3000);


		function replaceImages(){
		    let thecopy = [...srcs];
		    let images = document.getElementsByTagName("img");
		    console.log(images.length);
		    for(var i = 0; i < images.length; i++){
		        let image = images[i];
		        image.src = thecopy.shift();
		        if(thecopy.length === 0){
		            thecopy = [...srcs];
		        }
		    }
		}
	});
})();