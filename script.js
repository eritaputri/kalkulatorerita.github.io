const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//KALKULASI
let prevNumber = '' //nilai sebelumnya
let calculationNumber = ''
let currentNumber = '0' //nilai saat ini

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number //jika kondisi currentNumber bernilai = 0 (saat pertama ditekan tombol 0) maka dicetak 0
    }else{
        currentNumber += number //jika tidak maka 0 di hilangkan dicetak angka yang dinputkan dan dapat diinput beberapa angka dengan (+=)   
    }
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click" , (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//---OPERATOR----

//definisikan variable pada function inputOperator
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber //memberikan nilai yg tersimpan dari currentNumber ke prevNumber
    }
    calculationOperator = operator //memberikan operator ke calculationOperator sebagai argument
    currentNumber = '0'
} 
//function saat operator di klik
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) =>{
    operator.addEventListener("click" , (event) => {
        inputOperator(event.target.value)
    })
})

//function calculation/kalkulasi
const calculate = () => {
    let result =''
    switch(calculationOperator){
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = prevNumber - currentNumber
            break
        case "*" :
            result = prevNumber * currentNumber
            break
        case "/" :
            result = prevNumber / currentNumber
            break
        default :
        break
    }
    currentNumber = result
    calculationOperator = ''
}
//function calculate (saat = ditekan)
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//definisi function clear All 
const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//function clearBtn untuk AC
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click' , () => {
    clearAll()
    updateScreen(currentNumber)
})

//function inputDecimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

//function decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click' , (event) =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
