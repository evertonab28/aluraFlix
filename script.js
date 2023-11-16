var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_FMjpg_UY2937_.jpg", "https://m.media-amazon.com/images/M/MV5BNDQxYTExOWQtMzE4Zi00Yzg2LWEzYjUtMTBjMDdiYmY3ZTdjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1080_.jpg", "https://m.media-amazon.com/images/M/MV5BMzI0NjA4MjEtNzE4Yi00ZWU5LThjNWItMzcyZjJhNDUzMjhlXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX700_.jpg"];

//Desafio - forEach
function listarFilmes(filme) {
    var filmeElement = document.createElement('img');
    filmeElement.src = filme;
    document.getElementById('filme-container').appendChild(filmeElement);
}

listaFilmes.forEach(listarFilmes);

var btnAddFilme = document.getElementById('btn-add-filme');
if (btnAddFilme) {
    btnAddFilme.addEventListener('click', function () {
        var inputFilme = document.getElementById('url-filme').value;
        listaFilmes.push(inputFilme);
        limparFilmes();
        listaFilmes.forEach(listarFilmes);
        document.getElementById('url-filme').value = '';
    })
}

function limparFilmes() {
    var filmeContainer = document.getElementById('filme-container');
    filmeContainer.innerHTML = '';
}

