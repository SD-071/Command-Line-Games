const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error('Please provide exactly one move');
    return;
}

const playersMove = args[0];
const validMoves = ['rock', 'paper', 'scissors'];
const resultMap = {
    rock: {
        paper: 0,
        scissors: 1,
    },
    paper: {
        scissors: 0,
        rock: 1,
    },
    scissors: {
        rock: 0,
        paper: 1
    }
}

if (!validMoves.includes(playersMove)) {
    console.error('Please provide a valid move - rock/paper/scissors');
    return;
}

const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
let gameResult = `You chose ${playersMove}. Computer chose ${randomMove}. `;

if (randomMove == playersMove) {
    gameResult += 'It\'s a draw.'
} else if (resultMap[playersMove][randomMove]) {
    gameResult += 'You win!'
} else {
    gameResult += 'You lose.'
}

console.log(gameResult);
return;