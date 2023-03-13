// VARIABLES ----------------------------------
var res = document.getElementById('res')
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btnClr = document.getElementById('btnClr')
var btnEql = document.getElementById('btnEql')
var btnSum = document.getElementById('btnSum')
var btnSub = document.getElementById('btnSub')
var btnMul = document.getElementById('btnMul')
var btnDiv = document.getElementById('btnDiv')

var operand1 = []
var operandFloat = []
var operator = ""

// ADD EVENT LISTENER BOTONES---------------------- 
btn0.addEventListener('click', () => {
    addToRes(0)
    operandFloat.push(0)
})
btn1.addEventListener('click', () => {
    addToRes(1)
    operandFloat.push(1)
})

btnSum.addEventListener('click', () => {
    operand1 = [...operandFloat]
    operator = "+"
    addToRes("+")
    operandFloat = []
})

btnSub.addEventListener('click', () => {
    operand1 = [...operandFloat]
    operator = "-"
    addToRes("-")
    operandFloat = []
})
btnMul.addEventListener('click', () => {
    operand1 = [...operandFloat]
    operator = "*"
    addToRes("*")
    operandFloat = []
})
btnDiv.addEventListener('click', () => {
    operand1 = [...operandFloat]
    operator = "/"
    addToRes("/")
    operandFloat = []
})

btnEql.addEventListener('click', () => {
    let op1 = (operand1.join(''))
    let op2 = (operandFloat.join(''))
    op1 = toDec(op1)
    op2 = toDec(op2)
    console.log("operador 1: ", op1, " - operador2: ", op2, "operacion: ", operator);
    let resp = resolver(op1, op2)
    console.log("resultado de la operacion: ", resp);
    let binResp = toBin(resp)
    res.innerHTML = binResp
})
btnClr.addEventListener('click', () => {
    operand1 = []
    operandFloat = []
    operator = ""
    res.innerHTML = ""
})


// FUNCIONES -------------------------------------
function resolver(op1, op2){
    if (operator == "+"){
        return (op1+op2)
    }else if (operator == "-"){
        return (op1-op2)
    } else if (operator == "*"){
        return (op1*op2)
    } else if (operator == "/"){
        if(op1%op2 == 0){
        return (op1/op2)
        } else{
            return "ERROR"
        }
    }
}

function addToRes(digit) {
    res.innerHTML += digit
}




function toBin(num) {
    var binario = []
    while (num >= 2) {
        let resto = num % 2
        num = Math.floor(num / 2)
        binario.unshift(resto)
    }
    binario.unshift(num)
    binario = binario.join('')
    return binario
}

function toDec(bin) {
    let suma = 0
    let pos = 0
    var binArray = bin.split("").reverse()
    binArray.forEach(element => {
        element = parseInt(element)
        let parcial = element * Math.pow(2, pos)
        suma += parcial
        pos++
    });
    return suma
}


