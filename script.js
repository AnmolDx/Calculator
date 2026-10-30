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

let temp = 0
let operator = ""
let previous = ""
let current = ""

let displayText = document.querySelector(".displayText")
let result = document.querySelector(".result")
let calcContainer = document.querySelector(".calcContainer")
let specialMsg = document.querySelector("audio")
let video = document.createElement("video")

let btns = document.querySelectorAll(".calcBtns")

displayText.textContent = 0
function playVid() {
    calcContainer.innerHTML = ""
    video.src = "special-msgs/rickRoll.mp4"
    video.controls = true;
    video.autoplay = true;
    video.style.width = "100vw"
    calcContainer.appendChild(video)
}

function operate(previous, current, operator) {
    if (current == "0" && operator == "/") {
        specialMsg.play()
        result.textContent = "Buckle UP!!"

        setTimeout(() => {
            playVid()
        }, 3000);

    } else {
        result.textContent = ""
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
        temp = ""
        return res
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (result.textContent != "") {
            displayText.textContent = 0
            result.textContent = ""
            previous = ""
            current = ""
            operator = ""
            temp = 0
            if (!(btn.textContent == "Clear" || btn.textContent == "⌫" || btn.textContent == "=")) {
                temp += btn.textContent
                displayText.textContent += btn.textContent
            }
        }
        else if (btn.textContent == "Clear") {
            displayText.textContent = 0
            result.textContent = ""
            previous = ""
            current = ""
            operator = ""
            temp = 0
        }
        else if (btn.textContent == "⌫") {
            if (previous == displayText.textContent) {
                previous = previous.slice(0, -1)
                operator = ""
            }
            displayText.textContent = displayText.textContent.slice(0, -1)
            temp = temp.slice(0, -1)
        }
        else if (btn.textContent == "+"
            || btn.textContent == "-"
            || btn.textContent == "/"
            || btn.textContent == "*") {
            if (operator == "") { //if operator is empty do this
                console.log("operator is empty")
                operator += btn.textContent // operator is taken in operator
                console.log(btn.textContent, "has been asign to operator")
                previous += temp //first value is taken as previous
                displayText.textContent += btn.textContent
                temp = ""
            }
            else if (operator != "" && current == "" && temp != "") {//to display calculation if user press other operator
                let updatedDisplay = operate(previous, temp, operator)
                operator = btn.textContent
                displayText.textContent = ""
                displayText.textContent += updatedDisplay
                displayText.textContent += btn.textContent
                temp = ""
                previous = updatedDisplay
                result.textContent = ""
            }
            else if (operator != "" && previous != "") { //if operator is not empty and previous too then update the operator
                operator = btn.textContent
                displayText.textContent = displayText.textContent.slice(0, -1)
                displayText.textContent += btn.textContent
            }
        }
        else if (btn.textContent == "=") {
            if (previous != "") {
                current += temp //second value is taken from user
                operate(previous, current, operator)
            }
        } else if (btn.textContent == ".") {
            if (!(temp.includes("."))) {
                temp += btn.textContent
                displayText.textContent += btn.textContent
            }
        }
        else if(temp == 0 && displayText.textContent == 0){
            temp = ""
            displayText.textContent = ""
            temp += btn.textContent
            displayText.textContent += btn.textContent
        }else{
            temp += btn.textContent
            displayText.textContent += btn.textContent
        }
    })
})


// operate(parseInt(num1), operator, parseInt(num2))