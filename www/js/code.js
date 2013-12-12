var disableTouch = false;
function playSound(animal){
    if (disableTouch) {
		return;
	}
    disableTouch = true;
	var callback = new function(){
		disableTouch = false;
		alert('done');
	};
	var media = new Media("/android_asset/www/sounds/" + animal + ".wav",callback,callback);	
	media.play();
};