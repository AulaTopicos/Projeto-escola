function buscarAluno() {
    const endpoint = 'https://62b86abc03c36cb9b7c6b2ca.mockapi.io/alunos';

    const request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        const response = request.response;

        const matricula = document.getElementById('txtBusca').value;

        const aluno = response.find(function (aluno) {
            return aluno.matricula === matricula;
        });

        if (aluno !== undefined) {
            populateHtmlPage(aluno);
        } else {
            alert(`Matrícula ${matricula} não encontrada.`);
        }

    }
}

function populateHtmlPage(aluno) {
    const newWin = window.open('aluno_encontrado.html');

    newWin.onload = function () {
        const document = newWin.document;
        var nomeAluno = document.getElementById('nome_aluno').innerText;
        var matricula = document.getElementById('matricula').innerText;

        nomeAluno = nomeAluno + aluno.nome;
        matricula = matricula + aluno.matricula;

        document.getElementById('nome_aluno').innerText = nomeAluno;
        document.getElementById('matricula').innerText = matricula;

        var main = document.getElementById('main').innerHTML;

        main = `<section><div class="mt-5"><h4 style="margin-left: 40px;">Ano letivo: ${aluno.ano_letivo}</h4></div><div class="d-flex justify-content-md-center flex-column"><h1 style="margin: auto;">Atividades extras</h1></div></section>`;

        for (var i = 0; i < aluno.atividades_extras.length; i++) {
            const atividadeExtra = aluno.atividades_extras[i];

            const strongClass = atividadeExtra.status === 'Aprovado' ? 'text-success' : 'text-danger';

            const dataAtividade = new Date(atividadeExtra.data);

            const dataFormatada = dataAtividade.toLocaleDateString('pt-br') + ' - ' + dataAtividade.toLocaleTimeString('pt-br');

            main += `<section class="card-${i + 1}">` + '<div class="mt-5">' + '<div class="card-atividades">' +    
            '<div class="d-md-flex justify-content-between border-bottom">' + '<div class="card-atividades-data">' +
            `<p class="text-dark">${dataFormatada}</p>` + '</div>' + '<div class="card-prova-presenca">' +
            `<p class="text-dark">Situação: <strong class="${strongClass}">${atividadeExtra.status}</strong> </p>` + '</div></div>' +
            '<div class="card-atividades-data">' + `<p class="text-dark">${atividadeExtra.titulo}</p>` +
            `<p class="text-dark">Turno: ${atividadeExtra.turno}</p>` + `<p class="text-dark">Local: ${atividadeExtra.local}</p>` +
            `<p class="text-dark">Horas complementares: ${atividadeExtra.horas_complementares}</p>` + '</div></div></div></section>';

            document.getElementById('main').innerHTML = main;
        }

    }

}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),

        ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}

function exportar_frequencia() {
    const turma = document.getElementById('turma').value;

    if (turma === '') {
        window.alert('Atenção! Selecione uma turma para exportar a frequência dos alunos.');
    } else {
        window.open('/3asColegio-main/downloads/controle-frequencias.xlsx', '_self');
    }
}

function exportar_notas() {
    const turma = document.getElementById('turma').value;

    if (turma === '') {
        window.alert('Atenção! Selecione uma turma para exportar as notas dos alunos.');
    } else {
        window.open('/3asColegio-main/downloads/controle-notas.xlsx', '_self');
    }
}

function buscarAlunoAtividadeExtra() {
    const endpoint = 'https://62b86abc03c36cb9b7c6b2ca.mockapi.io/alunos';

    const request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        const response = request.response;

        const matricula = document.getElementById('txtBusca').value;

        const aluno = response.find(function (aluno) {
            return aluno.matricula === matricula;
        });

        if (aluno !== undefined) {
            populateHtmlPageAtividadeExtra(aluno);
        } else {
            alert(`Matrícula ${matricula} não encontrada.`);
        }

    }
}

function populateHtmlPageAtividadeExtra(aluno) {

    var section = document.getElementById('section').innerHTML;

    section += `<section><div class="mt-5"><h4 style="margin-left: 40px;">Aluno: ${aluno.nome}</h4></div></section>`;

    for (var i = 0; i < aluno.atividades_extras.length; i++) {
        const atividadeExtra = aluno.atividades_extras[i];

        const strongClass = atividadeExtra.status === 'Aprovado' ? 'text-success' : 'text-danger';

        const dataAtividade = new Date(atividadeExtra.data);

        const dataFormatada = dataAtividade.toLocaleDateString('pt-br') + ' - ' + dataAtividade.toLocaleTimeString('pt-br');

        section += `<section class="card-${i + 1}">` + '<div class="mt-5">' + '<div class="card-atividades">' + 
        '<div class="d-md-flex justify-content-between border-bottom">' + '<div class="card-atividades-data">' +
        `<p class="text-dark">${dataFormatada}</p>` + '</div>' + '<div class="card-prova-presenca">' +
        `<p class="text-dark">Situação: <strong class="${strongClass}">${atividadeExtra.status}</strong> </p>` + '</div></div>' +
        '<div class="card-atividades-data">' + `<p class="text-dark">${atividadeExtra.titulo}</p>` +
        `<p class="text-dark">Turno: ${atividadeExtra.turno}</p>` + `<p class="text-dark">Local: ${atividadeExtra.local}</p>` +
        `<p class="text-dark">Horas complementares: ${atividadeExtra.horas_complementares}</p>` + `<p class="text-dark">Responsável aprovação: ${atividadeExtra.responsavel_aprovacao}</p>` + 
        '</div></div></div></section>';

        document.getElementById('section').innerHTML = section;
    }

}

function mostrarAlunos() {
    const endpoint = 'https://62b86abc03c36cb9b7c6b2ca.mockapi.io/alunos';

    const request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        const response = request.response;

        const alunosSelect = document.getElementById('alunos');

        if (alunosSelect.options.length <= 1) {
            response.map((aluno) => {
                alunosSelect.add(new Option(aluno.nome));
            });
        }

    }
}

function mostrarConversaAluno(nomeAluno) {

    const endpoint = `https://62b86abc03c36cb9b7c6b2ca.mockapi.io/mensagens`;

    localStorage.setItem('nome_aluno', nomeAluno);

    const request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const mensagens = request.response;

        var mensagensConversa = [];

        for (var i= 0; i < mensagens.length; i++) {

            if (mensagens[i].nome_aluno == nomeAluno){
                mensagensConversa[mensagensConversa.length] = mensagens[i];
            }
        }


        var chat = document.getElementById('chat').innerHTML;

        for (var i = 0; i < mensagensConversa.length; i++) {
            chat += '<div class="media media-chat media-chat">' + '<div class="media-body">' +'<p>' + mensagensConversa[i].mensagem + '</p>' + '</div>' + '</div>';

            document.getElementById('chat').innerHTML = chat;
        }
    }
}

function enviarMensagem() {

    const alunosSelect = document.getElementById('alunos').value;

    if (alunosSelect === '') {
        window.alert('Atenção! Necessário informar um aluno antes de enviar uma mensagem.');
        return;
    }

    const mensagem = document.getElementById("mensagem").value;

    var chat = document.getElementById("chat").innerHTML;
    chat += '<div class="media media-chat media-chat-reverse">' + '<div class="media-body">' +'<p>' + mensagem + '</p>' + '</div>' + '</div>';

    document.getElementById("chat").innerHTML = chat;

    document.getElementById('mensagem').value = '';
}