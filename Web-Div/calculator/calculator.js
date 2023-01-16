function clk(val) {
    
    document.getElementById("screen"). value=document.getElementById("screen").value+val
}
function clrdisp(){
    document.getElementById("screen").value="0"
}
function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}

let operator

let num1 = 0
let num2 = 0

function showOnScreen(number){
    document.querySelector("#screen").value = number
}

// function storeNum1() {
//     num1 = document.querySelector("#screen").value
//     console.log(num1)
// }

function add() {
    num1 = document.querySelector("#screen").value
    operator = "+"
}

function minus() {
    num1 = document.querySelector("#screen").value
    operator = "-"
}
function times() {
    num1 = document.querySelector("#screen").value
    operator = "*"
}
function divide() {
    num1 = document.querySelector("#screen").value
    operator = "/"
}
function mod() {
    num1 = document.querySelector("#screen").value
    operator = "%"
}

function equals() {
    num2 = document.querySelector("#screen").value
    if (operator === "+") {
        console.log(+num1 + +num2)
        document.querySelector("#screen").value= +num1 + +num2
    }
    if (operator === "-") {
        console.log(num1 - num2)
        document.querySelector("#screen").value= num1 - num2
    }
    if (operator === "*") {
        console.log(num1 * num2)
        document.querySelector("#screen").value= num1 * num2
    }
    if (operator === "/") {
        console.log(num1 / num2)
        document.querySelector("#screen").value= num1 / num2
    }
    if (operator === "%") {
        console.log(num1 / num2)
        // 1. divide
        // 2. floor (round down) and store in variable
        // 3. modulas and store in variable
        // 4. create value that shows 4r2
        // 5. change the screen value to the full answer

        const value = 9/4

        const roundedDown = Math.floor(value)

        const modulas = num1 % num2

        document.querySelector("#screen").value= roundedDown + 'r' + modulas
    }
}