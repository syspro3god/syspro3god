x=100;
base_visina=(0.85*height)-80;
vy=0;
////////////////////////////////////////////
addSprites(['mario_right.png','mario_left.png','block.png']);

addObject("mario",0,100,(0.85*height)-80,40,80,kontrolaMaria);
addObject("block",2,50,(0.85*height)-250,50,50,function(){});

background = new Image();
background.src = 'images/background.png';

sprites[sprites.length-1].img.onload = function(){setInterval(function(){crtaj(context);},16);};
	  
function kontrolaMaria(x)
{
	if (pritisnutiTasteri[39]==1) {x.X+=10; x.sId = 0;} //desno
	if (pritisnutiTasteri[37]==1) {x.X-=10; x.sId = 1;} //levo
	if (pritisnutiTasteri[32]==1) if (vy==0) vy=-40; //skok (space)
	// gravitacija
	if (vy>0 && x.Y>base_visina)
		{vy=0; x.Y=base_visina;}
   	else
   		{x.Y+=vy; vy+=3;}
	//kolizija
	for (i=1; i<objekti.length; i++)
		if (boxCollision(x,objekti[i])) {vy=0; console.log("jesu! "+objekti[i].Name+ " " + x.Name);}
		else {}
}
function boxCollision(obj1, obj2)
{
	return ((obj1.X < obj2.X + obj2.W) && (obj1.X + obj1.W > obj2.X) && (obj1.Y < obj2.Y + obj2.H) && (obj1.H + obj1.Y > obj2.Y));
}














