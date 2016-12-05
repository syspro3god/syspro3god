document.getElementsByTagName("main")[0].style.marginTop = document.getElementsByTagName("header")[0].offsetHeight + 10; 

function promeni(a)
{
    for (i=0;i<document.getElementsByClassName("page").length;i++)
        {
            if (i==(a-1))
            {document.getElementById("page"+(i+1)).style.display="block"; }
            else
                document.getElementById("page"+(i+1)).style.display="none";
            
        }
    
}