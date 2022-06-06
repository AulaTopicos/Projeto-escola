const alunoJson = [
    {
        "nome":"Mateus",
        "idade":8,
        "colegio":"3as",
        "matricula":"Matricula:12345",
        "email":"victor@gmail.com",
        "numero_de_telefone":32123123,
        "genero":"masculino",
        "data_nascimento":"01/08/2000",
        "endereco":"Rua antonio",
        "numero_da_casa":145,
        "atividade-extra": true,
        "ativ-extra": ["Judo","Natação"],
        "disciplinas": [
            {
                nome: "matematica",
                provaOnline :"Não há provas disponíveis",
                provaRealizadas: [
                    {
                        data:"01/04/2022",
                        presenca: true,
                        nome:"Prova de Matemática - Ciclo 1 (A2)",
                        turma: "2A (2022/1)",
                        Materia: "Matemática",
                        turno: "Manhã",
                        nota: "80",
                    },
                    {
                        data: "04/05/2022",
                        presenca: true,
                        nome: "Prova Matemática",
                        turma: "2A (2022/1)",
                        turno: "Manhã",
                        nota: '60'
                    }
                ],
                faltas: 0,
            },
            {
                nome: 'portugues',
                provaOnline:"Não há provas disponíveisNão há provas disponíveis",
                faltas: 2,
                provaRealizadas :[
                    {
                        data:"01/04/2022",
                        presenca: true,
                        nome: "Prova de Português",
                        turma: "2A (2022/1)",
                        turno: "Manhã"
                    },
                    {
                        data:"04/05/2022",
                        presenca: false,
                        nome:"Prova de Português",
                        turma:"2A (2022/1)",
                        turno:"Manhã"
                    }
                ]
            }
        ]
    }
]
