nizlajk = [];
nizdislajk = [];

nizlajkS = [];

 

function lajk(a)
{
    nizlajk[a]++;
    
    document.getElementsByClassName("BrLajk")[a].innerHTML = "<br/>" + nizlajk[a] + " lajkova &nbsp;";   
}
function dislajk(a)
{
    nizdislajk[a]++;
    document.getElementsByClassName("BrDislajk")[a].innerHTML = nizdislajk[a] + " dislajkova";
}


function ispisi_rev(rev,i){
  var art = document.createElement('article');
    art.className += "novo";
  art.innerHTML="<span>"+rev.ime+"</span>"+"<div class='like_box' id='"+i+"'><table><tr><td><button class='lajk_button' onclick='lajk("+i+")'>&#x1f44d;</button><button class='dislajk_button' onclick='dislajk("+i+")'>&#x1f44e;</button></td></tr><tr><td><p class='brLajk'>0 lajkova &nbsp;</p><p class='brDislajk'>0 dislajkova</p></td></tr></table></div>"+rev.zap;
   document.getElementById("odje").appendChild(art);
}
var test;
function JSON_CALLBACK(x)
{
    i=0;
    for (j=x.feed.entry.length-3;j>=3;j-=3)
    {
            ispisi_rev({ime:x.feed.entry[j+1].content.$t,zap:x.feed.entry[j+2].content.$t},i);
            i++;   
    }
	test = x; 
	while(i--) {
	    
		nizlajk[i] = 0;
		nizdislajk[i] = 0;
		nizlajkS[i] = 0;
		}
}
function numLet()
{
	document.getElementsByTagName("textarea")[0].value=document.getElementsByTagName("textarea")[0].value.substring(0,255);      		document.getElementsByName("brslova")[0].innerHTML = document.getElementsByTagName("textarea")[0].value.length +"/255";
}

 document.getElementById("saljizap").disabled = true;
    function postavi()
    {
        if (document.getElementById("metnireview").style.maxHeight=="0px")  
            document.getElementById("metnireview").style.maxHeight="100%";
        else
            document.getElementById("metnireview").style.maxHeight="0px";
    }
    function checkSend()
	{
		if (document.getElementById("nadimak").value.length>0 && document.getElementById("zaptext").value.length>0)
			document.getElementById("saljizap").disabled = false;
		else
			document.getElementById("saljizap").disabled = true;
	}

