
var width, height, boxwidth, boxheight;
width = 40;
height = 40;
boxheight = 5;
boxwidth = 5;

function createBoard(){

	for(var i=0; i<width; i++){
		for(var j=0; j<height; j++){
			document.write(i,j);
		}
	}
}
