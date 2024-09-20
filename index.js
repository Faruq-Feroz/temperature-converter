const textbox = document.getElementById("textbox")
const fahrenheit = document.getElementById("fahrenheit")
const tocelcius = document.getElementById("tocelcius")
const result = document.getElementById("result")
let temp;
function convert(){
    
if(fahrenheit.checked){
    temp = Number(textbox.value);
    temp= temp * 9/5 + 32;
    result.textContent = temp.toFixed(1)+ ` C`
}
else if(tocelcius.checked){
    temp = Number(textbox.value);
    temp = (temp-32) * (5/9)
    result.textContent = temp.toFixed(1)+ ` C`
}
else{
    result.textContent = "Please select a unit"
    result.style.color = 'red'
}
}