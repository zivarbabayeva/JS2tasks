
function Click(){
    var div=document.getElementById('first');
    if(confirm("Press a button!") == true){
        (div.style.display='block')
    }
    else{
        div.style.display='none'
    }
    document.getElementById("first").innerHTML = text;
 }


