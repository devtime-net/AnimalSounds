function playSound(animal){
    var soundFile = null;
	if (animal == "cow") {
		soundFile = "cow.wav";
	} else if(animal == "sheep"){
		soundFile = "sheep.wav";
	}
	
	if (soundFile != null){
	  document.getElementById("Sound").innerHTML = "<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	}
};