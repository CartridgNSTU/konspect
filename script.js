function SayHello() {
  	let i = 0;
  	let div = document.getElementById("img");
  	while (i < 10){
  		let img = document.createElement('img')
 		img.src = 'steed.jpg'
 		div.appendChild(img)
 		i += 1;
	}
}
