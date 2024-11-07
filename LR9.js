let playerName;
let playerTotalScore = 0;
let computerTotalScore = 0;
let currentRound = 1;
const cards = [
    { img: "6 (+).jpg", points: 6 },
    { img: "7 (+).jpg", points: 7 },
    { img: "8 (+).jpg", points: 8 },
    { img: "9 (+).jpg", points: 9 },
    { img: "10 (+).jpg", points: 10 },
    { img: "J(+).jpg", points: 2 },
    { img: "Q(+).jpg", points: 3 },
    { img: "K(+).jpg", points: 4 },
    { img: "A (+).jpg", points: 11 },
    { img: "6 (H).jpg", points: 6 },
    { img: "7 (H).jpg", points: 7 },
    { img: "8 (H).jpg", points: 8 },
    { img: "9 (H).jpg", points: 9 },
    { img: "10 (H).jpg", points: 10 },
    { img: "J(H).jpg", points: 2 },
    { img: "Q(H).jpg", points: 3 },
    { img: "K(H).jpg", points: 4 },
    { img: "A (H).jpg", points: 11 },
    { img: "6 (P).jpg", points: 6 },
    { img: "7 (P).jpg", points: 7 },
    { img: "8 (P).jpg", points: 8 },
    { img: "9 (P).jpg", points: 9 },
    { img: "10 (P).jpg", points: 10 },
    { img: "J(P).jpg", points: 2 },
    { img: "Q(P).jpg", points: 3 },
    { img: "K(P).jpg", points: 4 },
    { img: "A (P).jpg", points: 11 },
    { img: "6 (R).jpg", points: 6 },
    { img: "7 (R).jpg", points: 7 },
    { img: "8 (R).jpg", points: 8 },
    { img: "9 (R).jpg", points: 9 },
    { img: "10 (R).jpg", points: 10 },
    { img: "J(R).jpg", points: 2 },
    { img: "Q(R).jpg", points: 3 },
    { img: "K(R).jpg", points: 4 },
    { img: "A (R).jpg", points: 11 },
];
window.onload = function() {
    playerName = prompt("Input your name:") || "NoName";
    document.getElementById("playerName").textContent = playerName;
};

function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function gameStart() {
    if (currentRound <= 3) {
        document.getElementById("countRound").textContent = `Round ${currentRound}`;
        let playerCard = getRandomCard();
        let computerCard = getRandomCard();
        if (playerCard.points > computerCard.points) document.getElementById("result").textContent = `${currentRound} round is taken by a ${playerName}!`;
        else if (playerCard.points < computerCard.points) document.getElementById("result").textContent = `${currentRound} round is taken by a Computer!`;
        else document.getElementById("result").textContent = `${currentRound} round draw`;
        playerTotalScore += playerCard.points;
        computerTotalScore += computerCard.points;
        document.getElementById("playerCardImg").src = playerCard.img;
        document.getElementById("playerScore").textContent = `Current score: ${playerCard.points}`;
        document.getElementById("playerTotalScore").textContent = `Total score: ${playerTotalScore}`;
        document.getElementById("computerCardImg").src = computerCard.img;
        document.getElementById("computerScore").textContent = `Current score: ${computerCard.points}`
        document.getElementById("computerTotalScore").textContent = `Total score: ${computerTotalScore}`;
        currentRound++;
        if (currentRound > 3) {
            if(playerTotalScore > computerTotalScore) document.getElementById("result").textContent = `${playerName} wins!`;
            else if(playerTotalScore < computerTotalScore) document.getElementById("result").textContent = "Computer wins!";
            else document.getElementById("result").textContent = "Draw";
            document.getElementById("button").disabled = true;
            document.getElementById("countRound").textContent = "Game over";
        }
    }
}