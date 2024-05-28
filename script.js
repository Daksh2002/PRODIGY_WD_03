let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cellIndex) {
    if (gameActive && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer;
        checkForWin();
        checkForDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkForWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }
}

function checkForDraw() {
    if (!gameBoard.includes('')) {
        document.getElementById('status').textContent = 'It\'s a draw!';
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
