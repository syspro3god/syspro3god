var i=1;
function klikno()
{
    alert(document.getElementsByName('1')[0].value + " : " + document.getElementsByName('2')[0].value);
    alert(document.getElementsByName("komentar")[0].value);
}
function triggered()
{    
  document.getElementsByClassName("slider_img")[i].style.height="100%";
  document.getElementsByClassName("slider_img")[(i+1)%3].style.height="0%"; document.getElementsByClassName("slider_img")[(i+2)%3].style.height="0%";
    

  i=(i+1)%3;
}
setInterval(triggered,2000);

function numLet()
{
   document.getElementsByTagName("textarea")[0].value=document.getElementsByTagName("textarea")[0].value.substring(0,255); document.getElementsByName("brslova")[0].innerHTML = document.getElementsByTagName("textarea")[0].value.length +"/255";
}

var test;
function JSON_CALLBACK(x)
{
    test=x;
    for (j=0;j<x.feed.entry.length;j++)
    {
        h=x.feed.entry[j].content.$t;
        h=h.split(", komentar: "); 
        h[0]=h[0].substring(7);
        if (h[1].split(", enejblovan: 1").length - 1==1) document.getElementById("komentari").innerHTML+="<h3>"+h[0]+"</h3><p>"+h[1].split(", enejblovan: 1")[0]+"</p>";
    }
}















