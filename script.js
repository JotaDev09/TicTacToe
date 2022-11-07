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