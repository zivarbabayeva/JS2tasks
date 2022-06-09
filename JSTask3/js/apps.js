function Click() {
    var photo = document.getElementById('img');
    if (photo.style.filter === 'grayscale(1)') {
        photo.style.filter = 'grayscale(0)'
    }
    else {
        photo.style.filter = 'grayscale(1)'
    }
}

function Mode() {
    var body = document.getElementById('bdy');
    var icon = document.getElementById('icon');

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'

    }
    else {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'

    }
}