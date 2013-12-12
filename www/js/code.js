var disableTouch = false;
function playSound(animal){
    if (disableTouch) {
		return;
	}
    disableTouch = true;
	var media = new Media("/android_asset/www/sounds/" + animal + ".wav", new function(){disableTouch = false;},new function(){disableTouch=false;});	
	media.play();
};