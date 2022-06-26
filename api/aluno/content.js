
// const json = JSON.stringify(alunoJson)
// // console.log(json)
// const jsonAluno = JSON.parse(json)
// // console.log(jsonAluno)



// jsonAluno[0];
// // leva as informações ate o html
//     console.log("item")
//     if(document.getElementById("prova")){
//         document.getElementById("prova").innerHTML = jsonAluno.disciplinas
//     }
   

    // if(document.querySelector('#section')){
    //     const section = document.querySelector('#section'); 

    //     jsonAluno[0].disciplinas.map((item) => {
    //         // console.log(jsonAluno[0].disciplina[key]);
    //         section.innerHTML += `
    //             <div class="area-prova-realizada">
    //                     ${
    //                         item.provaRealizadas.map(prova => (`
    //                             <div>
    
    //                                 <div class="prova-realizadas border-bottom">
                                        
    //                                     <div>
    //                                         <p id="area-data">${prova.data}</p>
    //                                     </div>
    //                                     <div>
    //                                         <p id="area-presenca">Presença: ${prova.presenca ? "Presente" : "Falta"}</p>
    //                                     </div>
    //                                 </div>
    //                                 <div class="mt-3">
    //                                     <p>${prova.nome}</p>
    //                                     <p>Turma: ${prova.turma}</p>
    //                                     <p>Turno: ${prova.turno}</p>
    //                                     <p>Nota: ${prova.nota}</p>
    //                                 </div>
    //                             </div>
    //                         `))
    //                     }
    //             </div>
    //         `;
    //       });
    // }
   

provaOnline = $('.provaOnline').html();
output = Mustache.render(provaOnline, alunoJson);
$(".mytable2").append(output);

provasRealizadas = $('.provasRealizadas').html();
output = Mustache.render(provasRealizadas, alunoJson);
$(".mytable2").append(output);


faltas = $('.faltas').html();
output = Mustache.render(faltas, alunoJson);
$(".mytable2").append(output);


atividadeExtra = $('.atividadeExtra').html();
output = Mustache.render(atividadeExtra, alunoJson);
$(".mytable3").append(output);

minhasFaltas = $('.minhasFaltas').html();
output = Mustache.render(minhasFaltas, alunoJson);
$(".mytable4").append(output);

notas = $('.notas').html();
output = Mustache.render(notas, alunoJson);
$(".mytable5").append(output);

usuario = $('.usuario').html();
output = Mustache.render(usuario, alunoJson);
$(".mytable6").append(output);

curso = $('.curso').html();
output = Mustache.render(curso, alunoJson);
$(".mytable7").append(output);

