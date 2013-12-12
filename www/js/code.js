function playSound(animal){
	var media = new Media("/android_asset/www/sounds/" + animal + ".wav", null, null);
	media.play();
};