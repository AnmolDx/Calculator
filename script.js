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

let num1 = ""
let num2 = 0
let displayText = document.querySelector(".displayText")

let btns = document.querySelectorAll(".calcBtns")
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.textContent == "Clear"){
            displayText.textContent = ""
        }else if(btn.textContent == "⌫"){
            displayText.textContent = displayText.textContent.slice(0, -1)
        }else if(btn.textContent == "+"
            || btn.textContent == "-"
            || btn.textContent == "/"
            || btn.textContent == "*"){
                displayText.textContent = "hell yeah"
            }
        else{
            num1 += btn.textContent
            displayText.textContent += btn.textContent

        }
        console.log(btn.textContent)
        console.log(num1)
    })
})


// let num1 = prompt("enter first number")
// let num2 = prompt("enter second number")
// let operator = prompt("enter the operator")

function operate(num1, operator, num2){
    console.log(add(num1, num2))
}

// operate(parseInt(num1), operator, parseInt(num2))