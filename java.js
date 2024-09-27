let randomnumber = Math.floor(Math.random() * 100) + 1
const guessInput = document.querySelector('#guessInput')
const submitBtn =  document.querySelector('#submitBtn')
const result = document.querySelector('#result')

submitBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value)
    
    if (!userGuess ||  userGuess < 1 || userGuess > 100) {
        result.innerText = "Не пытайся меня обмануть"
    } else if(userGuess === randomnumber) {
        result.innerText = 'Поздравляю! Вы угвдали число!🔝'
        setTimeout(() => {
        randomnumber = Math.floor(Math.random() * 100) + 1
        result.innerText = 'Загаданное число обновленно'
        }, 3000);
    } else if (userGuess < randomnumber) {
        result.innerText = "Загаданное число больше ⬆️"
    } else {
        result.innerText = "Загаданное число меньше ⬇️"
    }
})