function textChange(){
   document.getElementById('tc').innerHTML="Have a nice day!";


}

function warning(){

	alert("You are about to print this document!");
}

function showDateTime(){
	document.getElementById('d_t').innerHTML = Date();
}

function bulbOn(){
	document.getElementById('bulb').src="image/pic_bulbon.gif";
}
function bulbOff(){
	document.getElementById('bulb').src="image/pic_bulboff.gif";
}

function colorChange(){
	document.getElementById('clr').style.color="darkblue";
}

function displayNone(){
	document.getElementById('none').style.display="none";
}

function displayBlock(){
	document.getElementById('block').style.display="block";
}