var disableTouch = false;
function playSound(animal){
	if (disableTouch == true){
		return;
	};
	disableTouch = true;
	var media = new Media("/android_asset/www/sounds/" + animal + ".wav", null, null);
	var duration = media.getDuration();
	setTimeout(enableTouch(), duration);
	media.play();
};

function enableTouch() {
	disableTouch = false;
};