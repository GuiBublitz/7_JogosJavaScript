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
    const bg = document.querySelector('.bg');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = []

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPHg7eEC2CGfBrtvdJuB2vsjMGfgKhD2e6g&usqp=CAU')  
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
            cards[optionOneId].setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6343/6343515.png')
            cards[optionTwoId].setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6343/6343515.png')  
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPHg7eEC2CGfBrtvdJuB2vsjMGfgKhD2e6g&usqp=CAU')  
            cards[optionTwoId].setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPHg7eEC2CGfBrtvdJuB2vsjMGfgKhD2e6g&usqp=CAU') 
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
            bg.setAttribute('style','background-image: url("https://c.tenor.com/2butBxs8FYkAAAAM/celebrate-happy.gif");')
            grid.setAttribute('style', 'display:none;')
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