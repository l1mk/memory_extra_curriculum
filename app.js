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

const grid = document.querySelector('.grid')

//create board

function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/pkm-back');
        card.setAttribute('data-id', i);
        //card.addEventListener('click', flipcard);
        grid.appendChild(card)
    }
}

createBoard()

})