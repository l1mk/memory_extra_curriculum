document.addEventListener('DOMContentLoaded', () => {
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

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const resetButton = document.querySelector('#reset');
var cardsChoosen = [];
var cardsChoosenId = [];
var cardsWon = [];

//create board
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/pkm-pokeball.jpg');
        card.setAttribute('data-id', i);
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
        alert('You Found a Match')
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        cardsWon.push(cardsChoosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/pkm-pokeball.jpg')
        cards[optionTwoId].setAttribute('src', 'images/pkm-pokeball.jpg')
        alert('Sorry, try again')
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    resultDisplay.innerHTML = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations, You Won"   
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

//reset
function reset(){
    resultDisplay.innerHTML = 0;
    cardsChoosen = [];
    cardsChoosenId = [];
    cardsWon = [];
    while ( grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    cardArray.sort(() => 0.5 - Math.random())
    createBoard()
}

resetButton.addEventListener('click', reset)
createBoard()

})