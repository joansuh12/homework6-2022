var video = document.querySelector("#player1")
// var playbackSpeed = 1.0;
// var current;
// var soundStatus;



window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	// document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	video.play();
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= .95;
	console.log("New speed is:" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= .95;
	console.log("New speed is:" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() { 
	// video.pause();
	video.currentTime += 15;
	current = video.currentTime;
	console.log("Current time is " + current);
	video.play();
	
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		current = video.currentTime;
		video.play();
		console.log("Current time is: " + current);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.getElementById('volume').innerHTML = 'muted';
		document.getElementById('mute').innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.getElementById('volume').innerHTML = video.volume * 100 + '%';
		document.getElementById('mute').innerHTML = 'Mute';
	}

});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = (document.querySelector("#slider").value)/ 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});


document.querySelector("#vintage").addEventListener("click", function(){
	document.getElementById("player1").classList.add("oldSchool");
	console.log("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
	console.log("orignal");
});
