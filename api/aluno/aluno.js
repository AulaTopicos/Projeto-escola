// const alunoJson = [
//     {
//         "nome":"Mateus",
//         "idade":8,
//         "colegio":"3as",
//         "matricula":"Matricula:12345",
//         "email":"victor@gmail.com",
//         "numero_de_telefone":32123123,
//         "genero":"masculino",
//         "data_nascimento":"01/08/2000",
//         "endereco":"Rua antonio",
//         "numero_da_casa":145,
//         "atividade-extra": true,
//         "ativ-extra": [{
//             nome:"Futsal",
//             img:"",
//             title:"Venha participar do nosso campeonato de futebol. Monte seu time e venha se divertir",
//             data: "A partir do dia 08/05/2022 as 08:00"
//         }],
//         "disciplinas": [
//             {
//                 nome: "matematica",
//                 provaOnline :"Não há provas disponíveis",
//                 provaRealizadas: [
//                     {
//                         data:"01/04/2022",
//                         presenca: true,
//                         nome:"Prova de Matemática - Ciclo 1 (A2)",
//                         turma: "2A (2022/1)",
//                         Materia: "Matemática",
//                         turno: "Manhã",
//                         nota: "80",
//                     },
//                     // {
//                     //     data: "04/05/2022",
//                     //     presenca: true,
//                     //     nome: "Prova Matemática",
//                     //     turma: "2A (2022/1)",
//                     //     turno: "Manhã",
//                     //     nota: '60'
//                     // }
//                 ],
//                 faltas: 0,
//             },
//             {
//                 nome: 'portugues',
//                 provaOnline:"Não há provas disponíveisNão há provas disponíveis",
//                 faltas: 2,
//                 provaRealizadas :[
//                     {
//                         data:"01/04/2022",
//                         presenca: true,
//                         nome: "Prova de Português",
//                         turma: "2A (2022/1)",
//                         turno: "Manhã",
//                         nota: "80",
//                     },
//                     // {
//                     //     data:"04/05/2022",
//                     //     presenca: false,
//                     //     nome:"Prova de Português",
//                     //     turma:"2A (2022/1)",
//                     //     turno:"Manhã"
//                     // }
//                 ],
//                 faltas: 0,
//             }
//         ]
//     }
// ]


// Code goes here

var alunoJson =  {
    "nome":"Victor Hugo ",
    "idade":8,
    "colegio":"3as",
    "matricula":"Matricula: 12345",
    "email":"victor@gmail.com",
    "numero_de_telefone":32123123,
    "genero":"masculino",
    "data_nascimento":"01/08/2000",
    "endereco":"Rua antonio, 190 ",
    "numero_da_casa":145,
    ativExtra: [
        {
            url:"/layout/aluno/assets/img/imgFutebol.jpg",
            Futsal:"jdjjjdsjds",
            discricao:"Venha participar do nosso campeonato de futebol. Monte seu time e venha se divertir",
            data:"A partir do dia 08/05/2022 as 08:00"
        },
    ],
    disciplinas: [
        {
            url:"../assets/img/imgPortugues.jpg",
            nome:"Matematica",
            provaOnline: 1,
            turno: "Manhã",
            turma: "2A (2022/1)",
            material: 'http://mtm.ufsc.br/~will/disciplinas/20152/mtm7003/mtmbasica.pdf',
            faltas: {
                semestre1: 5,
                semestre2: 6
            },
            provaRealizadas:[
                {
                    data:"01/04/2022",
                    presenca: true,
                    nome:"Prova de Matemática - Ciclo 1 (A2)",
                    nota: "80"
                }
            ],
            trabalhos: [
                {
                    nome: 'trabalho1',
                    dataEntrega: '10/12/2022',
                    nota: 10,    
                },
                {
                    nome: 'trabalho2',
                    dataEntrega: '12/12/2022',
                    nota: 9,    
                },
            ]
        },
        {
            url:"../assets/img/imgPortugues.jpg",
            nome:"Portugues",
            provaOnline: 3,
            turno: "Manhã",
            turma: "2A (2022/1)",
            material: '',
            faltas: {
                semestre1: 8,
                semestre2: 10
            },
            provaRealizadas:[
                {
                    data:"01/04/2022",
                    presenca: true,
                    nome:"Prova de Português - Ciclo 1 (A2)",
                    nota: "80",
                }
            ],
            trabalhos: [
                {
                    nome: 'trabalho3',
                    dataEntrega: '15/12/2022',
                    nota: 6,    
                },
                {
                    nome: 'trabalho4',
                    dataEntrega: '17/12/2022',
                    nota: 9,    
                },
            ]
        }
    ],
    semestre:{
        faltas:11,
        semestres: [
            {
                id: 1,
                nome:"1° Primeiro Semestre",
                faltas: 4
            },
            {
                id: 2,
                nome:"2° Segundo Semestre",
                faltas: 7
                
            },
        ]
    },
    avaliacoes: [
        {
            nome: '1° avaliação',
            media: 90,
            disciplinas: [
                {
                    nome: 'Matematica',
                    nota: 90
                },
                {
                    nome: 'Português',
                    nota: 80
                }
            ]
        },
        {
            nome: '2° avaliação',
            media: 110,
            disciplinas: [
                {
                    nome: 'Matematica',
                    nota: 80
                },
                {
                    nome: 'Português',
                    nota: 100
                }
            ]
        }
    ]
}
    

  














