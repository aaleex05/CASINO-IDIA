let player = {
	name: "Guest",
	chips: 100
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");
const startGame = document.getElementById("start-game");
const newCard = document.getElementById("new-card");

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

startGame.addEventListener("click", function () {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
});

function renderGame() {
	cardsEl.textContent = "Cartas: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = "Total: " + sum;
	if (sum <= 20) {
		message = "Quieres seguir?";
	} else if (sum === 21) {
		message = "Has conseguido BlackJack!";
	} else {
		message = "Has perdido";
		isAlive = false;
	}
	messageEl.textContent = message;
}

newCard.addEventListener("click", function () {
	if (isAlive === true && hasBlackJack == false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
});
