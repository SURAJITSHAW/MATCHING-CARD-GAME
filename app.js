// card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

// Suffling ranomly
cardArray.sort(() => 0.5 - Math.random()); // this '0.5 - Math.random()' gonna give us frcation in range from -0.5 to 0.5

// select html elements
const gameGrid = document.getElementById('grid');
const resultDisplay = document.getElementById('result');

// Global Variables
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

// create game board
function createBoard() {
    // creating img element for each element at cardArray array and then append it to gameGrid div
    
    cardArray.forEach( (cardElement, index) => {
        // create a img element
        const card = document.createElement('img');
        // set some attributes to those newly created img elements
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', index);

        // addEventListener to the card
        card.addEventListener('click', flipCard);

        // let's append them to our game grid
        gameGrid.appendChild(card);
    })
}

// to flip the card
function flipCard() {
    // getting the `data-id` attribiute of the targeted card
    const cardId = this.getAttribute('data-id');
    // set src atr from blank to specified img in the cardArray
    this.setAttribute('src', cardArray[cardId].img);

    // to keep track of cards we clicked had to push name, data-id
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);

    // Whenever we clicked second card, should check for the match
    if (cardChosen.length === 2) {
        // we could call the funct immediately, but giving a little time would look great
        setTimeout(checkForMatch, 500);
    } 
}

function checkForMatch() {
    console.log('Checked for a match!');   
    const cards = document.querySelectorAll('#grid img');

    // if click on the same card
    if (cardChosenIds[0] == cardChosenIds[1]) {
        alert('Oops!!! You clicked the same card.');
        cards[cardChosenIds[0]].setAttribute('src', './images/blank.png');
    } else if (cardChosen[0] == cardChosen[1]) {
        alert('Yay! You found a match.')

        // set to white bg for matched cards
        cards[cardChosenIds[0]].setAttribute('src', './images/white.png');
        cards[cardChosenIds[1]].setAttribute('src', './images/white.png');
        // remove the event listener
        cards[cardChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardChosenIds[1]].removeEventListener('click', flipCard);
        // upadting result
        cardsWon.push(cardChosen);
    } else {
        // If it isn't a match, What we want to do
        alert('Sorry 😓 Try again... ');
        // if it's not a match, then flip back the clicked card to blank
        cards[cardChosenIds[0]].setAttribute('src', './images/blank.png');
        cards[cardChosenIds[1]].setAttribute('src', './images/blank.png');

    }

    resultDisplay.textContent = cardsWon.length;
    cardChosen = [];
    cardChosenIds = [];

    // Final Result - GAME OVER
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Woohhoo!!! You had select them all correctly.'
    }
}

// calling createBoard funct
createBoard();




