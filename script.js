var filme1 = '';
var filme2 = '';
var filme3 = '';

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_FMjpg_UY2937_.jpg", "https://m.media-amazon.com/images/M/MV5BNDQxYTExOWQtMzE4Zi00Yzg2LWEzYjUtMTBjMDdiYmY3ZTdjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1080_.jpg", "https://m.media-amazon.com/images/M/MV5BMzI0NjA4MjEtNzE4Yi00ZWU5LThjNWItMzcyZjJhNDUzMjhlXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX700_.jpg"];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
}

