let hide = true;

function ShowImg(){
 if (hide == true) {
 	document.getElementById('img').src = 'steed.jpg';
 	hide = false;

 }
else {
	document.getElementById('img').src = '';
	hide = true;
}	
}