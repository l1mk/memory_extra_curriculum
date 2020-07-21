document.addEventListener('DOMContentLoaded', () => {
    const top = document.querySelector('#top')
    const instBtn = document.querySelector('#inst-Btn')
    const instruction = document.querySelector('#instructions')
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const resetButton = document.querySelector('#reset');
    const timeLeft = document.querySelector('#time')
    var cardsChoosen = [];
    var cardsChoosenId = [];
    var cardsWon = [];
    let topScore = 0;
    let currentTime = 60;
    let timerId;

//card options
const cardArray = [
    {
        name: 'pkm-01',
        img: 'images/pkm-01.jpg'
    },
    {
        name: 'pkm-01',
        img: 'images/pkm-01.jpg'
    },
    {
        name: 'pkm-02',
        img: 'images/pkm-02.jpg'
    },
    {
        name: 'pkm-02',
        img: 'images/pkm-02.jpg'
    },
    {
        name: 'pkm-03',
        img: 'images/pkm-03.jpg'
    },
    {
        name: 'pkm-03',
        img: 'images/pkm-03.jpg'
    },
    {
        name: 'pkm-04',
        img: 'images/pkm-04.jpg'
    },
    {
        name: 'pkm-04',
        img: 'images/pkm-04.jpg'
    },
    {
        name: 'pkm-05',
        img: 'images/pkm-05.jpg'
    },
    {
        name: 'pkm-05',
        img: 'images/pkm-05.jpg'
    },
    {
        name: 'pkm-06',
        img: 'images/pkm-06.jpg'
    },
    {
        name: 'pkm-06',
        img: 'images/pkm-06.jpg'
    },
    {
        name: 'pkm-07',
        img: 'images/pkm-07.jpg'
    },
    {
        name: 'pkm-07',
        img: 'images/pkm-07.jpg'
    },
    {
        name: 'pkm-08',
        img: 'images/pkm-08.jpg'
    },
    {
        name: 'pkm-08',
        img: 'images/pkm-08.jpg'
    },
    {
        name: 'pkm-09',
        img: 'images/pkm-09.jpg'
    },
    {
        name: 'pkm-09',
        img: 'images/pkm-09.jpg'
    },
    {
        name: 'pkm-10',
        img: 'images/pkm-10.jpg'
    },
    {
        name: 'pkm-10',
        img: 'images/pkm-10.jpg'
    },
    {
        name: 'pkm-11',
        img: 'images/pkm-11.jpg'
    },
    {
        name: 'pkm-11',
        img: 'images/pkm-11.jpg'
    },
    {
        name: 'pkm-12',
        img: 'images/pkm-12.jpg'
    },
    {
        name: 'pkm-12',
        img: 'images/pkm-12.jpg'
    },
    {
        name: 'pkm-13',
        img: 'images/pkm-13.jpg'
    },
    {
        name: 'pkm-13',
        img: 'images/pkm-13.jpg'
    },
    {
        name: 'pkm-14',
        img: 'images/pkm-14.jpg'
    },
    {
        name: 'pkm-14',
        img: 'images/pkm-14.jpg'
    },
    {
        name: 'pkm-15',
        img: 'images/pkm-15.jpg'
    },
    {
        name: 'pkm-15',
        img: 'images/pkm-15.jpg'
    },
    {
        name: 'pkm-16',
        img: 'images/pkm-16.jpg'
    },
    {
        name: 'pkm-16',
        img: 'images/pkm-16.jpg'
    },
    {
        name: 'pkm-17',
        img: 'images/pkm-17.jpg'
    },
    {
        name: 'pkm-17',
        img: 'images/pkm-17.jpg'
    },
    {
        name: 'pkm-18',
        img: 'images/pkm-18.jpg'
    },
    {
        name: 'pkm-18',
        img: 'images/pkm-18.jpg'
    },
]
cardArray.sort(() => 0.5 - Math.random())

//create board
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/pkm-pokeball.png');
        card.setAttribute('data-id', i);
        card.classList.add('card')
        card.addEventListener('click', flipcard);
        grid.appendChild(card)
    }
}

//find match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    var optionOneId = cardsChoosenId[0];
    var optionTwoId = cardsChoosenId[1];
    if (cardsChoosen[0] === cardsChoosen[1]){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChoosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/pkm-pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pkm-pokeball.png')
        alert('Sorry, try again')
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    resultDisplay.innerHTML = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations, You Won"   
        if (topScore < cardsWon.length){
            topScore = cardsWon.length
            top.innerHTML = `${topScore} by Player 1`  
        }
        alert ("game over")
    }
}


//flipcard 
function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenId.push(cardId); 
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChoosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}


//timer
function timer(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0){
        if (topScore < cardsWon.length){
            topScore = cardsWon.length
            top.innerHTML = `${topScore} by Player1`  
        }
        reset()
        alert ("Times up, Try Again")
    }
}

//reset
function reset(){
    clearInterval(timerId)
    currentTime = 60
    timeLeft.textContent = currentTime
    resultDisplay.innerHTML = 0;
    cardsChoosen = [];
    cardsChoosenId = [];
    cardsWon = [];
    while ( grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    cardArray.sort(() => 0.5 - Math.random())
    createBoard()
    timerId = setInterval(timer, 1000)
}
    createBoard()
    resetButton.addEventListener('click', reset) 
    instBtn.addEventListener('click', () =>{
        if (instBtn.innerHTML === 'Instructions'){
         instBtn.innerHTML = 'Hide'
         instruction.style.display = 'block'
        } else if (instBtn.innerHTML === 'Hide'){
         instBtn.innerHTML = 'Instructions'
         instruction.style.display = 'none'  
        }
     })

     timerId = setInterval(timer, 1000)
})