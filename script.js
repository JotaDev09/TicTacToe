let fields = [];
let gameOver = false;
let currentShape = 'blue';


// show the shapes on the table
function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'blue') {
            currentShape = 'red';
            document.getElementById('player_1').classList.remove('player-inactive');
            document.getElementById('player_2').classList.add('player-inactive')
        } else {
            currentShape = 'blue';
            document.getElementById('player_1').classList.add('player-inactive');
            document.getElementById('player_2').classList.remove('player-inactive')
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        winner();
    }


    function draw() {
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == 'red') {
                document.getElementById('red-' + i).classList.remove('d-none');
            }
            if (fields[i] == 'blue') {
                document.getElementById('blue-' + i).classList.remove('d-none');
            }
        }
    }
}


//show the the black line if a player do 3 shapes in line
function winner() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(135deg) scaleX(1)';
    }

    if (winner) {
        //console.log('Gewonnen', winner)
        gameOver = true;
        setTimeout(function () {
            document.getElementById('newGame').classList.remove('d-none');
        }, 2000);
    }
}


// restart the game
function newGame() {
    gameOver = false;
    fields = [];
    currentShape = 'blue';
    document.getElementById('newGame').classList.add('d-none');
    document.getElementById('player_1').classList.remove('player-inactive');
    document.getElementById('player_2').classList.add('player-inactive');

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0.0)';
    }
    
    for (let i = 0; i < 9; i++) {
        document.getElementById('blue-' + i).classList.add('d-none');
        document.getElementById('red-' + i).classList.add('d-none');
    }
}