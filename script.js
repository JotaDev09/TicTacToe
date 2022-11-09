let fields = [];

let currentShape = 'blue';


function fillShape(id) {
    if (currentShape == 'blue') {
        currentShape = 'red';
    } else {
        currentShape = 'blue';
    }
    fields[id] = currentShape;
    console.log(fields);
    draw();
    winner();
}

function draw() {
    for (let i=0; i < fields.length; i++) {
        if(fields[i] == 'red') {
            document.getElementById('red-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'blue') {
            document.getElementById('blue-' + i).classList.remove('d-none');
        }
    }
}


function winner() {
    let winner;

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields [0];
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields [3];
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields [6];
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields [0];
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields [1];
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields [2];
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields [0];
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields [2];
    }

    if (winner) {
        console.log('Gewonnen', winner)
    }

    
}