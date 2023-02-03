const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color')
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
    color.textContent = colors[getRandomNumber()]
    document.body.style.backgroundColor = colors[getRandomNumber()]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}