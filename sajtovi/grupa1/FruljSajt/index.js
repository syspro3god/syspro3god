document.body.style.paddingTop = document.getElementsByTagName("header")[0].offsetHeight + "px";

var lajkovi = [0,0,0,0,0,0,0];
var dislajkovi = [0,0,0,0,0,0,0];
function lajk(index)
{
    lajkovi[index]++;
    update(index);
    
}
function dislajk(index)
{
    dislajkovi[index]++;
    update(index);
   
}
function update(index)
{
     document.getElementsByClassName("likespan")[index].innerHTML = lajkovi[index] + " likes";
     document.getElementsByClassName("dislikespan")[index].innerHTML = dislajkovi[index] + " dislikes";
}
function generateLikes()
{
    lista = document.getElementsByClassName("like_box");
    for (i=0;i<lista.length;i++)
        {
            lista[i].innerHTML = "<span class='likespan'>"+lajkovi[i]+"<button onclick='lajk("+i+")' class='like_button'>&#9650;</button></span><span class='dislikespan'>"+dislajkovi[i]+"<button onclick='dislajk("+i+")' class='dislike_button'>&#9660;</button></span>"
        }
}
generateLikes();