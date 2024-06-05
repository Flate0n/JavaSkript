const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
let action = '+'
//console.log(resultElement )
function printResult(result){
    if (result < 0 ) {
        resultElement.style.color = "red"
    }
    else {
        resultElement.style.color = "green"
    } 
    resultElement.textContent = result
}

function computeNumberWithAction(inp1, inp2, actionSymbol){
    const num1= Number(inp1.value)
    const num2= Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2 
    }
    else if (actionSymbol == '-') {
        return num1 - num2 
    }
    else if (actionSymbol == '*') {
        return num1 * num2 
    }
    else {
        return num1 / num2 
    }
    
}
plusBtn.onclick=function(){
    action = '+'
    console.log("press +")
}
minusBtn.onclick=function(){
    action = '-'
    console.log("press -")
}
multiplyBtn.onclick=function(){
    action = '*'
    console.log("press *")
}
divisionBtn.onclick=function(){
    action = '/'
    console.log("press /")
}
submitBtn.onclick=function(){
    printResult(computeNumberWithAction(input1, input2, action))
}