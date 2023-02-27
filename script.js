let player1 = [], player2 = [];
let winning = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
let attempts = 9;



function addToBoard(id) {
    if (attempts % 2 != 0) {
        player1.push(Number(id));
        document.getElementById(id).innerHTML += `<p class="card-text">X</p>`;
    } else {
        player2.push(Number(id));
        document.getElementById(id).innerHTML += `<p class="card-text">0</p>`;
    }
    --attempts;
    checkBoard();
}

function checkBoard() {
    if (attempts < 5) {
        for (let i = 0; i < 8; ++i) {
            let x = 0;
            let o = 0;
            for (let j = 0; j < 3; ++j) {
                if (player1.indexOf(winning[i][j]) > -1) {
                    ++x;
                }
                if (player2.indexOf(winning[i][j]) > -1) {
                    ++o;
                }
            }
            if (x == 3) {
                document.getElementById("board").innerHTML = `Congrats, player 1 wins 🎉
                <br> <button type="button" class="btn btn-primary" onclick="history.go(0)">Play again</button>`;
            } else if (o == 3) {
                document.getElementById("board").innerHTML = `Congrats, player 2 wins 🎉
                <br>
                <button type="button" class="btn btn-primary" onclick="history.go(0)">Play again</button>`;
            }
        }
    }
    if (attempts == 0) {
        document.getElementById("board").innerHTML = `Nobody wins :(
        <br>
        <button type="button" class="btn btn-primary" onclick="history.go(0)">Play again</button>`;
    }
}   
