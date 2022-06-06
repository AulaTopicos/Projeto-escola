

// leva as informações ate o html
alunoJson.map((item,index)=>{
    document.getElementById("colegio").innerHTML = item.colegio
    document.getElementById("usuario").innerHTML = item.nome
    document.getElementById("matricula").innerHTML = item.matricula
})


