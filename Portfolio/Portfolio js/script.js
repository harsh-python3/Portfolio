const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','rgb(208, 208, 208)', 'yellow', 'black', 'green', 'beige', 'grey' ]

body.style.background = 'grey'

button.addEventListener ('click' , changeBackground)

function changeBackground() {
    const randomNumber= parseInt(Math.random ()*color.length);
    body.style.background = color [randomNumber]
    }
    