
const json = JSON.stringify(alunoJson)
// console.log(json)
const jsonAluno = JSON.parse(json)
// console.log(jsonAluno)


jsonAluno[0];
// leva as informações ate o html
    console.log("item")
    if(document.getElementById("prova")) {
        document.getElementById("prova").innerHTML = jsonAluno[0].disciplinas
    }
 
    const section = document.querySelector('#section'); 

    jsonAluno[0].disciplinas.map((item) => {
        // console.log(jsonAluno[0].disciplina[key]);
        section.innerHTML += `
            <div class="area-prova-realizada">
            <h1>${item.nome}</h1>
                    ${
                        item.provaRealizadas.map(prova => (`
                            <div style="border: 1px solid red;">

                                    <div class="prova-realizadas border-bottom">
                                    ${prova.nome}
                                    <div>
                                        <p id="area-data">${prova.data}</p>
                                    </div>
                                    <div>
                                        <p id="area-presenca">${prova.presenca ? "Presente" : "Falta"}</p>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <p id="area-ciclo-prova">Prova A1 (Ciclo 1 / Ciclo 2)</p>
                                    <p id="area-data-prova">03/06/2022 08:00 Prova A1 (Ciclo 1 / Ciclo 2)</p>
                                    <p id="area-materia">Curso: CST EM ANALISE E DESENVOLVIMENTO DE SISTEMAS</p>
                                    <p id="area-turma">Turma: 2NA (2022/1)</p>
                                </div>
                            </div>
                        `))
                    }
            </div>
        `;
      });
