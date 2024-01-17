const text = document.getElementById("text")
let  result = document.getElementById("result")
const  radioBtn1 = document.getElementById("radio-btn1")
const  radioBtn2 = document.getElementById("radio-btn2")
const submitBtn = document.getElementById("submit")
let temp

function convert() {
    if(radioBtn1.checked){
        temp = Number(text.value)
        temp = temp * 9/5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(radioBtn2.checked){
        temp = Number(text.value)
        temp = (temp -32) * 5/9 
        result.textContent = temp.toFixed(1) + "°C"

    }
    else{
        result.textContent = "Select a unit"
    }
}

