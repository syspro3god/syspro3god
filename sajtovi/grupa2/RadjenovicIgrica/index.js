ctx = document.getElementById("jedini").getContext("2d");
duzina = Math.min(document.getElementById("jedini").height,document.getElementById("jedini").width);
tacka = {"x":1,"y":1};
currLevel=0;
broj = 10;
lavirint = [];
lavirint[0] = [[1,1,1,1,1,1,1,1,1,1],
            [1,0,1,0,0,0,0,0,0,1],
            [1,0,0,0,1,1,1,0,1,1],
            [1,0,0,0,1,0,0,0,0,1],
            [1,1,1,0,1,1,0,0,0,1],
            [1,1,0,0,1,0,0,1,0,1],
            [1,0,1,1,1,0,0,1,1,1],
            [1,0,1,0,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,0,1]];
lavirint[1] = [[1,1,1,1,1,1,1,1,1,1],
             [1,0,1,0,0,0,0,0,0,1],
             [1,0,1,1,1,1,1,1,0,1],
             [1,0,1,0,1,0,1,0,0,0],
             [1,0,0,0,1,0,0,0,0,1],
             [1,0,1,1,1,1,1,0,0,1],
             [1,0,0,1,0,1,0,0,0,1],
             [1,0,0,1,0,1,0,0,1,1],
             [1,0,0,0,0,0,0,1,1,1],
             [1,1,1,1,1,1,1,1,1,1]];
lavirint[2] = [[1,1,1,1,1,1,1,1,1,1],
             [1,0,0,0,0,0,0,0,0,1],
             [1,1,1,0,0,1,1,1,0,1],
             [1,0,1,0,0,1,0,1,0,1],
             [1,0,1,1,1,1,0,1,0,1],
             [1,0,0,0,0,0,0,1,0,1],
             [1,0,1,1,1,1,1,1,0,1],
             [1,0,1,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,1,1,1],
             [1,1,1,0,1,1,1,1,1,1]];

endPos = [{"x":8,"y":9},{"x":9,"y":3},{"x":3,"y":9}];
/*
var lavirint = new Array(broj);
for (var i = 0; i < broj; i++) {
  lavirint[i] = new Array(broj);
}

for (i=0; i<broj;i++)
    for (j=0; j<broj; j++)
        {
            lavirint[i][j]=0;
            if ((i==0) || (i==broj-1) || (j==0) || (j==broj-1)) lavirint[i][j]=1; 
        }
*/
boje = ["#FFFFFF","#000000"];

pritisnutiTasteri = Array(255);
for (i=0; i<255; i++)
	pritisnutiTasteri[i]=0;

function crtaj()
{
    for (i=0;i<broj;i++)
        for(j=0;j<broj;j++)
        {
        ctx.fillStyle = boje[lavirint[currLevel][j][i]];
         ctx.fillRect(i*duzina/broj,j*duzina/broj,duzina/broj,duzina/broj);
        }
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(tacka.x*duzina/broj,tacka.y*duzina/broj,duzina/broj,duzina/broj);
    
}
function slobodno (x, y)
{
    return ((x>=0) && (y>=0) && (x<broj) && (y<broj) && (lavirint[currLevel][y][x]==0));
}
function mrdaj()
{
	if ((pritisnutiTasteri[39]==1) && (slobodno(tacka.x+1,tacka.y))) {tacka.x++; } //desno
	if ((pritisnutiTasteri[37]==1) && (slobodno(tacka.x-1,tacka.y))) {tacka.x--;} //levo
	if ((pritisnutiTasteri[40]==1) && (slobodno(tacka.x,tacka.y+1))){tacka.y++; }//gore
    if ((pritisnutiTasteri[38]==1) && (slobodno(tacka.x,tacka.y-1))) {tacka.y--;} //dole
    if ((endPos[currLevel].x == tacka.x) && (endPos[currLevel].y == tacka.y) && (currLevel + 1 < lavirint.length)) {currLevel++; tacka.x=1; tacka.y=1; crtaj();}
    else if ((endPos[currLevel].x == tacka.x) && (endPos[currLevel].y == tacka.y) ){ alert("CESTITAMO, PRESLI STE IGRICU, HVALA NA IGRANJU!"); currLevel = 0; tacka = {"x":1,"y":1};}
    console.log (tacka.x + "," + tacka.y);
}

document.onkeydown = function (e) {
	e = e || window.event;
	pritisnutiTasteri[e.keyCode]=1;
};
document.onkeyup = function (e) {
	e = e || window.event;
	pritisnutiTasteri[e.keyCode]=0;
};
setInterval(function(){
    document.getElementById("nivo").innerHTML = "Level " + (currLevel+1);
    mrdaj();
    crtaj();
},100);
