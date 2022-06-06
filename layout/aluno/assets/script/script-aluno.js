$('.select-estados').change(function (event) {
    var semestre = event.currentTarget.value;
    if (semestre == 2) {
        document.getElementById('faltas').innerHTML = "Total: 0 falta(s)"
        document.getElementById('atencao').style.display = 'none'
        document.getElementById('faltas').style.backgroundColor = 'green';
    } else {
        document.getElementById('faltas').innerHTML = "Total: 4 falta(s)"
        document.getElementById('atencao').style.display = 'inline-flex'
        document.getElementById('faltas').style.backgroundColor = 'red';
    }
});