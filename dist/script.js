let randNum = (parseInt(Math.random()*100+1));

const sub = document.getElementById('submt');

const userInp =  document.getElementById('guessField');

const previous =  document.getElementById('guesses');

const remaining =  document.getElementById('remaining');

const lastresult =  document.getElementById('lastRe');
const resultParas = document.getElementById('startOver');

const lastNum = document.getElementById('lastNum');

const p = document.createElement('p')

let preguess = []
let numGuess = 1
let playGame = true;

if (playGame) {
    sub.addEventListener('click', function (e) {
        e.preventDefault();

        const guess = parseInt(userInp.value)
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a number > 0')
    }
    else if(guess>100){
        alert('Please enter a number < 100')
    } else{
        preguess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMsg(`GameOver, the random number is ${randNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMsg(`You guessed right`)
        endGame()
    } else if (guess < randNum){
        displayMsg(`Number is too low`)

    }else if (guess > randNum){
        displayMsg(`Number is too big`)
    }
}


function displayGuess(guess) {
    userInp.value = ''
    previous.innerHTML += ` ${guess} `;
    numGuess++;
    remaining.innerHTML = ` ${11 - numGuess}`
}

function displayMsg(message) {
    lastresult.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    userInp.value = "";
    userInp.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2  class=" w-full flex justify-center text-white bg-black py-2 px-4 rounded-full" id="newGame">REstart</h3>`
    resultParas.appendChild(p);
    playGame = false;
    newGame()
}
function newGame() {
   const newGameBtn = document.querySelector('#newGame')
   newGameBtn.addEventListener("click",function(){
    randNum = (parseInt(Math.random()*100+1));
    preguess = []
    numGuess = 1
    previous.innerHTML = ''
    remaining.innerHTML = ` ${11 - numGuess}`
    userInp.removeAttribute('disabled')
    resultParas.removeChild(p)
    displayMsg('')
    playGame = true;
   })
}