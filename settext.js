

(function($){
  //chrome.storage.sync.get('textContent', function(data) {
  chrome.storage.local.get('textContent', function(data) {
    var newtext = data.textContent;
    var words = newtext.split(/ /);
    var pullwords= [...words];

    var i = 0;
    $(":contains('')").filter(":visible").contents().filter(function() {  
      return this.nodeType == 3
    }).each(function(){
      i++;
      let length = this.textContent.length;
       if(this.textContent.trim() !== ""){
       this.textContent  = getTextCloseToLength(length);
      }
    //  this.textContent  = "|"+  i + "|";
    });

    function getTextCloseToLength(length){
      let min = Math.floor(length - (length * .15));
      let max = Math.floor(length + (length * .15));
      let text = "";
      while(text.length < min){
        text += pullwords.shift() + " ";
        if(pullwords.length === 0){
        	pullwords = [...words];
        }
      }
      return text;
    }
  }); 
})(jQuery);