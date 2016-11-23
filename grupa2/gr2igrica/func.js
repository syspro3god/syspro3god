sprites = [];
objekti = [];

canvas = document.getElementById("main");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

function addSprite(spriteLoc)
{
	tmpSprite = new Image();
	tmpSprite.src = 'images/'+spriteLoc;
	sprites.push({img:tmpSprite, name:spriteLoc.split('.')[0]});
}
function addSprites(arr)
{
	for (i=0; i<arr.length; i++)
		addSprite(arr[i]);
}

function addObject(name,spriteId,x,y,w,h,kontrola)
{
	tmpObj = {Name:name,sId:spriteId, X:x, Y:y, W:w, H:h, cnt:kontrola};
	objekti.push(tmpObj);
}

function crtajObjekat(ctx,objekat)
{
	ctx.drawImage(sprites[objekat.sId].img,objekat.X,objekat.Y,objekat.W,objekat.H);
}
function crtajPozadinu(ctx)
{
	ctx.drawImage(background,0,0,width,height);
}

pritisnutiTasteri = Array(255);
for (i=0; i<255; i++)
	pritisnutiTasteri[i]=0;

document.onkeydown = function (e) {
	e = e || window.event;
	pritisnutiTasteri[e.keyCode]=1;
};
document.onkeyup = function (e) {
	e = e || window.event;
	pritisnutiTasteri[e.keyCode]=0;
};

function crtaj(ctx)
{
	crtajPozadinu(ctx);
	for (i=0; i<objekti.length; i++)
		objekti[i].cnt(objekti[i]);
	for (i=0; i<objekti.length; i++)
		crtajObjekat(ctx,objekti[i]);
}
