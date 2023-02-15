
function ClickMe(){
    
    // var = variable

    var h1 = document.getElementById("header");

    h1.innerHTML = "Blue Phenix";
    h1.style.color = "blue";
    h1.style.fontSize = "20px";


    var x = 10;
    var y = 20;

    var z = x + y;
    var title = "Blue Phenix Skills Training Center Corp."
    h1.innerHTML = title;
}

function calculate(){

    var firstNum = document.getElementById("firstNum").value;
    var secondNum = document.getElementById("secondNum").value;

    var result = parseInt(firstNum) + parseInt(secondNum);

    var output = document.getElementById("result");

    output.value = result;
}