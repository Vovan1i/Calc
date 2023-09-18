// let num = 42  //number
// let firstName = 'Vladimir'   //strimg
// const isProgrammer = true  //boolean

// Can do
// let $ = 'test'
// let $num = 42
// let num$ = 42
// let _ = 49
// let _num = 12
// let num_ = 12
// let first_name = 'Elena'  // bad
// let myNum = 34 //good
// let num42 = 10


/* Restricted 
// let 42num - '11'
// let my-num = 1
// let const
*/

// firstName = 'Max'
// isProgrammer = false // error because of const

// alert(firstName)
// console.log('Test: ', num, firstName)
 
//  console.log(num + 10)
//  console.log(num - 10)
//  console.log(num * 10)
//  console.log(num / 10)
//  console.log(num)

// let num2 = num + 10 
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)

// 
// let num3 = num + (10 * 2)/ 5 - 1
// console.log (num3)

// const fullName = firstName + ' Volkov'
// console.log (fullName)

// const resultElement = document.getElementBiId('result')
// console.log (resultElement)
// console.log(num+1)// console.log (num+4)
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multuplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
let action = '+'
// let action = '-'
console.log(input1.value)
console.log(input2.value)

// console.log(typeof sum)
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multuplyBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}
// // multuplyBtn.onclick = function () {
// //     action = '*'
// }

function printResult(result){
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result 
}

function computeNumbersWitchAction (inp1, inp2, actionSymbol) {
    const num1 = Number (inp1.value)
    const num2 = Number (inp2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    } else if (actionSymbol == '-'){
        return num1 - num2
    } else if (actionSymbol == '*'){
        return num1 * num2
    } else if (actionSymbol == '/'){
        return num1 / num2
    } 

    // return actionSymbol == '+' ? num1+num2 : num1-num2 
    // return однострочный синтаксис, спрашиваем - это равно "+", если да, то num1+num2, если нет num1-num2
    
}

submitBtn.onclick = function ( ) {
    const result = computeNumbersWitchAction (input1, input2, action)
    printResult (result)
//     // console.log('Hello Click!')
//     // if (action == '+')  {
//     //     const sum = Number(input1.value) + Number(input2.value)
//     //     printResult(sum)
//     // } else  if (action == '-')  {
//     //     const sum = Number(input1.value) - Number(input2.value)
//     //     printResult(sum)
//     // }
}

