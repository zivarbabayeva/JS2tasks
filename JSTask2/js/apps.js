
function Click() {
    let age = prompt("Please enter your age");
    if (age<18) {
      document.getElementById("first").innerHTML =
       "Get boyuyende gelersen";
    }
    else{
        document.getElementById("first").innerHTML =
        "Buyurun";  
    }
  }


