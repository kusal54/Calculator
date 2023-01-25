const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')

const btnAdd = document.getElementById('btnAdd')
const btnMin = document.getElementById('btnMin')
const btnMul = document.getElementById('btnMul')
const btnDv = document.getElementById('btnDv')

const btnDot = document.getElementById('btnDot')

const btnEq = document.getElementById('btnEq')

const btnAc = document.getElementById('btnAc')
const btnDel = document.getElementById('btnDel')

const answer = document.getElementById('answer')



btn0.addEventListener('click', () => {
    document.getElementById('answer').value += "0"
})


btn1.addEventListener('click', () => {
    document.getElementById('answer').value += "1"
})

btn2.addEventListener('click', () => {
    document.getElementById('answer').value += "2"
})

btn3.addEventListener('click', () => {
    document.getElementById('answer').value += "3"
})

btn4.addEventListener('click', () => {
    document.getElementById('answer').value += "4"
})

btn5.addEventListener('click', () => {
    document.getElementById('answer').value += "5"
})

btn6.addEventListener('click', () => {
    document.getElementById('answer').value += "6"
})

btn7.addEventListener('click', () => {
    document.getElementById('answer').value += "7"
})

btn8.addEventListener('click', () => {
    document.getElementById('answer').value += "8"
})

btn9.addEventListener('click', () => {
    document.getElementById('answer').value += "9"
})

btnAdd.addEventListener('click', () => {
    document.getElementById('answer').value += "+"
})

btnMin.addEventListener('click', () => {
    document.getElementById('answer').value += "-"
})

btnMul.addEventListener('click', () => {
    document.getElementById('answer').value += "*"
})

btnDv.addEventListener('click', () => {
    document.getElementById('answer').value += "/"
})

btnDot.addEventListener('click', () => {
    document.getElementById('answer').value += "."
})


btnAc.addEventListener('click', () => {
    document.getElementById('answer').value = ""
})

btnDel.addEventListener('click', () => {
    document.getElementById('answer').value = ""
})



btnEq.addEventListener('click', () => {
    let result = eval(document.getElementById('answer').value)

    document.getElementById('btnEq').onclick = function () {
        document.getElementById('answer').value = result
    }
})