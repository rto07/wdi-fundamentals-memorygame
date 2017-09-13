var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
 
var cardsInPlay = [];

var clicked = document.getElementsByClassName("clicked");

var score = 0;
 
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!');
        score += 1;
        document.getElementById('score').textContent = score;
    	} else {
        alert('Sorry, try again.');
    	}
    	cardsInPlay = [];
	}
 
function flipCard() {
    var cardId = this.getAttribute("data-id");
    this.setAttribute("src", cards[cardId].cardImage);
    this.setAttribute("class", "clicked");
    console.log('User flipped ' + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}
 
function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        var board = document.getElementById("game-board");
        board.appendChild(cardElement);
       
    }
}
 
function flipBack() {
    for (var i = 0; i < clicked.length; i++) {
        clicked[i].setAttribute("src", "images/back.png");
    }
}
 
function resetGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    flipBack();
}
 
createBoard();
document.querySelector("button").addEventListener('click', resetGame);