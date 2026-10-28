function add(num1, num2){
    return num1+num2
}
function subtract(num1, num2){
    return num1-num2
}
function multiply(num1, num2){
    return num1*num2
}
function divide(num1, num2){
    return num1/num2
}

let num1 = 0
let num2 = 0
let displayText = document.querySelector(".displayText")

let btns = document.querySelectorAll(".calcBtns")
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.textContent == "clear" 
            || btn.textContent == "⌫" 
            || btn.textContent == "="){
                
            }
        console.log(btn.textContent)
        num1 += parseInt(btn.textContent)
        displayText.textContent += btn.textContent
        console.log(typeof num1)
    })
})


// let num1 = prompt("enter first number")
// let num2 = prompt("enter second number")
// let operator = prompt("enter the operator")

function operate(num1, operator, num2){
    console.log(add(num1, num2))
}

operate(parseInt(num1), operator, parseInt(num2))