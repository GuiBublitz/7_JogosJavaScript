document.addEventListener('DOMContentLoaded', ()=>{
    
    //card options
    const cardArray = [
        {
            name: 'JavaScript',
            img: 'img/icons8-javascript-96.png'
        },
        {
            name: 'JavaScript',
            img: 'img/icons8-javascript-96.png'
        },
        {
            name: 'Kotlin',
            img: 'img/icons8-kotlin-96.png'
        },
        {
            name: 'Kotlin',
            img: 'img/icons8-kotlin-96.png'
        },
        {
            name: 'Java',
            img: 'img/icons8-logo-java-coffee-cup-96.png'
        },
        {
            name: 'Java',
            img: 'img/icons8-logo-java-coffee-cup-96.png'
        },
        {
            name: 'NodeJS',
            img: 'img/icons8-nodejs-96.png'
        },
        {
            name: 'NodeJS',
            img: 'img/icons8-nodejs-96.png'
        },
        {
            name: 'Python',
            img: 'img/icons8-python-96.png'
        },
        {
            name: 'Python',
            img: 'img/icons8-python-96.png'
        },
        {
            name: 'Swift',
            img: 'img/icons8-swift-96.png'
        },
        {
            name: 'Swift',
            img: 'img/icons8-swift-96.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = []

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/icons8-yellow-square-96.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/icons8-white-large-square-96.png')  
            cards[optionTwoId].setAttribute('src', 'img/icons8-white-large-square-96.png')  
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'img/icons8-yellow-square-96.png')  
            cards[optionTwoId].setAttribute('src', 'img/icons8-yellow-square-96.png') 
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard();
})