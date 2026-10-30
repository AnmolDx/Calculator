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
let calcContainer = document.querySelector(".calcContainer")
let specialMsg = document.querySelector("audio")
let video = document.createElement("video")

let btns = document.querySelectorAll(".calcBtns")

function playVid(){
    calcContainer.innerHTML = ""
    video.src = "special-msgs/rickRoll.mp4"
    video.controls = true;
    video.autoplay = true;
    video.style.width = "100vw"
    calcContainer.appendChild(video)
}

function operate(previous, current, operator) {
    if(current == "0" && operator == "/"){
        specialMsg.play()
        result.textContent = "Buckle UP!!"
        
        setTimeout(() => {
            playVid()
        }, 3000);



        
    }else{
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
        if (btn.textContent == "Clear" || result.textContent != "") {
            displayText.textContent = ""
            result.textContent = ""
            previous = ""
            current = ""
            operator = ""
            temp = ""
        }
        else if (btn.textContent == "⌫") {
            if(previous == displayText.textContent){
                previous = previous.slice(0,-1)
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
            else if (operator != "" && current == "") {
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
                console.log("previous and operator both are not empty")
                operator = btn.textContent
                displayText.textContent = displayText.textContent.slice(0, -1)
                displayText.textContent += btn.textContent
            }
            else {
                console.log("something went wrong")
            }
        }
        else if (btn.textContent == "=") {
            if(previous != ""){
                current += temp //second value is taken from user
                operate(previous, current, operator)
            }
        }
        else {
            temp += btn.textContent
            displayText.textContent += btn.textContent
        }
        console.log("temp", temp)
        console.log("operator", operator)
        console.log("pre", previous)
        console.log("curr", current)

    })
})


// operate(parseInt(num1), operator, parseInt(num2))