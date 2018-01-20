var speedy = 5;
var n =1;
function setup() {
	createCanvas(windowWidth, windowHeight);
	this.x = getWidth()/2;
	this.y = getHeight()/2;
}
function getWidth(){
	return windowWidth;
}
function getHeight(){
	return windowHeight;
}

function draw() {
show();
move();
if(n<=2){
bounce();
}
else{
	this.y=getHeight();
}
//ballStop();
 }

 function move(){
	 this.y=this.y+speedy;
	// this.y=this.y+1;
 }
 function show(){

   background(25);
   ellipse(this.x,this.y,50,50);
 }
function bounce(){
	if(this.y>=getHeight()){
		speedy = -5;
		n+=0.1;
		print(n);
	} else if(this.y<=((getHeight()*n)/(2))){
		speedy = 5;
	}
	}
