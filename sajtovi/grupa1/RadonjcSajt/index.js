if (!window.matchMedia("(max-width: 1024px)"))
    document.getElementById("content").style.marginTop = document.getElementsByTagName("header")[0].offsetHeight + 10;

var i=0;
function slider()
{    
  document.getElementsByClassName("slider_img")[i].style.height="100%";
  document.getElementsByClassName("slider_img")[(i+1)%3].style.height="0%";           document.getElementsByClassName("slider_img")[(i+2)%3].style.height="0%";
  i=(i+1)%3;
}
setInterval(slider,5000);