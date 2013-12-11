function playSound(animal){
    var media = null;
	if (animal == "cow") {
		media = new Media("/android_asset/www/cow.wav",null,null);
	} else if(animal == "sheep"){
		media = new Media("/android_asset/www/sheep.wav",null,null);
	}
	
	if (media != null){
		media.play();
	  //document.getElementById("Sound").innerHTML = "<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	}
};