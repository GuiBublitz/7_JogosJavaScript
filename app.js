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

    const grid = document.querySelector('.grid');

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/icons8-yellow-square-96.png')
        }
    }
    createBoard();
})