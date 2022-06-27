
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


