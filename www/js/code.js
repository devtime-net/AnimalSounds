function playSound(animal){
    var media = null;
	if (animal == "cow") {
		media = new Media("cow.wav",null,null);
	} else if(animal == "sheep"){
		media = new Media("sheep.wav",null,null);
	}
	
	if (media != null){
		media.play();
	  //document.getElementById("Sound").innerHTML = "<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	}
};