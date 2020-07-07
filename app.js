let body = document.querySelector('body');


let btn = document.querySelector('input');


let span = document.querySelector('span');


const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']



btn.addEventListener('click', changeColor)


function changeColor() {
    let hexValue = '#'

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexNum.length)
        console.log(index)
        hexValue += hexNum[index]
        console.log(hexValue)
    }
    span.textContent = hexValue
    body.style.backgroundColor = hexValue

}