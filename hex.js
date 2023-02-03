const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color')
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomColor()]
    }

    console.log(getRandomColor())

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

const getRandomColor = () => {
    return Math.floor(Math.random() * hex.length)
}