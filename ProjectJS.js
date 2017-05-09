/*
Declare elements to be used 
*/

startBtnImage=document.getElementById("startButton");
runner1=document.getElementById("runner1");
runner2=document.getElementById("runner2");
winnerDisp = document.getElementById("winner");
winner1Disp = document.getElementById("winner1disp");
winner2Disp = document.getElementById("winner2disp");
OodDisp = document.getElementById("Ood");
var aniTimer;


/*
Function to begin race
*/

function beginRace(){
	
	winner1Disp.style.display = "none";
	winner2Disp.style.display = "none";
	Ood.style.display = "block";
	winnerDisp.style.display = "none";
	var xwidth=900;
	startBtnImage.src = "https:/dl.dropbox.com/s/hgv0uh5im5y46wp/StopButton.PNG?dl=0";
	runner1.style.left="0px";
	runner2.style.left="0px";
	raceCont();
}

/*
Function for race
*/

function raceCont(){
	var x1=parseInt(runner1.style.left);
	var x2=parseInt(runner2.style.left);
	var xwidth=900;
	var xfinal;
	var randNum1=Math.floor(Math.random()*(15-1)+1);
	var randNum2=Math.floor(Math.random()*(15-1)+1);


	xfinal = xwidth;

	/*
		Random numbers for runner's course
	*/

	x1=x1+randNum1;
	x2=x2+randNum2;

	/*
		Declare winner of the race 
	*/

	if(x1 >= xfinal|| x2 >= xfinal){
		clearTimeout(aniTimer);
		winnerDisp.style.display = "block";
		Ood.style.display = "none"
		if(x1 >= xfinal){
			winner1Disp.style.display = "block";
		}
		if(x2 >=  xfinal){
			winner2Disp.style.display = "block";
		}
	startBtnImage.src="Start.jpg";
	}
	/*
		This moves the runners to the finish line (Castle)
	*/

	if(x1 < xfinal && x2 < xfinal) {
		if(x1 != xfinal && x1 < xfinal){
			runner1.style.left = x1 + "px";
		}
		else if(x1 > xfinal){
			runner1.style.left = xfinal + "px";
		}
		if(x2 != xfinal && x2 < xfinal){
			runner2.style.left = x2 + "px";
		}
		else if(x2 > xfinal){
			runner2.style.left = xfinal + "px";
		}
		aniTimer=setTimeout(raceCont, 15);
	}
}