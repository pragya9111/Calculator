var input = document.querySelector("#num")
var keys = document.querySelector("#keyboard")
var inputText = "";
keys.addEventListener("click", function(dets){
    var buttonText=dets.target.innerText
    if(buttonText == "C"){
       inputText = ""
        input.value = inputText
    }
    else if(buttonText == "x"){
       buttonText = "*"
       inputText += buttonText
        input.value = inputText
     }
    else if(buttonText == "="){

        input.value = eval(inputText);
    }
    else{
        inputText += buttonText
        input.value = inputText
    }
})