function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

let temp = ""
let operator = ""
let previous = ""
let current = ""

let displayText = document.querySelector(".displayText")
let result = document.querySelector(".result")

let btns = document.querySelectorAll(".calcBtns")

function operate(previous, current, operator) {
    let res = 0
    switch (operator) {
        case "+":
            res = Number(previous) + Number(current)
            break;
        case "-":
            res = Number(previous) - Number(current)
            break;
        case "*":
            res = Number(previous) * Number(current)
            break;
        case "/":
            res = Number(previous) / Number(current)
            break;
    }
    result.textContent += res
    previous = res
    current = ""


}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent == "Clear") {
            displayText.textContent = ""
            result.textContent = ""
        }
        else if (btn.textContent == "⌫") {
            displayText.textContent = displayText.textContent.slice(0, -1)
        }
        else if (btn.textContent == "+"
            || btn.textContent == "-"
            || btn.textContent == "/"
            || btn.textContent == "*") {
            if (operator != "") {
                console.log("operator is not empty")
                current += temp //second value is taken from user if user click on operator again
                operate(previous, current, operator)
                operator = ""
            } else {
                operator += btn.textContent // operator is taken in operator
                previous += temp //first value is taken as previous
                displayText.textContent += btn.textContent
                temp = ""
                console.log("operator is empty")
            }
        }
        else if (btn.textContent == "=") {
            current += temp //second value is taken from user
            operate(previous, current, operator)
        }
        else {
            temp += btn.textContent
            displayText.textContent += btn.textContent
        }
        console.log("operator", operator)
        console.log("pre", previous)
        console.log("curr", current)

    })
})


// operate(parseInt(num1), operator, parseInt(num2))