var broj = 1;

document.getElementsByClassName('slider-desc')[0].style.visibility = "visible";

function promeni()
{
    document.getElementsByClassName('slider-item')[(broj+1)%3].style.height = 0;
    document.getElementsByClassName('slider-item')[(broj+2)%3].style.height = 0;
    
    document.getElementsByClassName('slider-desc')[(broj+1)%3].style.visibility = "hidden";
    document.getElementsByClassName('slider-desc')[(broj+2)%3].style.visibility = "hidden";
    
    
   document.getElementsByClassName('slider-item')[broj].style.height = 470;
    document.getElementsByClassName('slider-desc')[broj].style.visibility = "visible";
    broj=(broj+1)%3;
}
setInterval(promeni,2000);