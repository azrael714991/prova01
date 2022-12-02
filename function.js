// Questions will be asked
const Questions = [{
    id: 0,
    q: "O cimento de Oxido de Zinco e Eugenol (028) tem sido comumente utilizado como material obturador temporário (curativo), sendo o pioneiro em sua categoria, mesmo não cumprindo todos os requisitos ideiais de um bom material obturador. Possui propriedades anti-inflamatórias, analgésicas e ação antimicrobiana, que reforçam a indicacão de seu uso. Sua manipulação é bastante trabalhosa pois temos que incorporar a maior quantidade possível de pó a mistura. Sabendo disso responda as questões a seguir: A: Por que essa conduta é importante para desempenho clinico desejado do material?  B: Qual o aspecto clinico que o material deve apresentar ao ser inserido na cavidade? ",
    a: [{ text: " A Alguns  sistemas  adesivos a presentam em sua composição a  adição de partículas  orgânicas de tamanho nanométrico com a finalidade de melhorar suas  propriedades  mecânicas ", isCorrect: false },
        { text: "A  sílica   é a  partícula  mais  usa da  para  a  finalidade  de  melhorar  as  proprie da desmecânicas  dos sistemas  adesivos.", isCorrect: false },
        { text: "A: Por que o  eugenol é um irritante pulsar e devemos incorporar o máximo de pó possivel para não ter excesso de eugenol. B: Opaca, sem brilho, desgrudando da placa de vidro o rolete/rolinho ", isCorrect: true },
        { text: "Retenção menor que os selantes resionosos, com evidência por meio de estudos clinicos controlados randomizados da superioridade dos selantes fluoretados", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Os agente cimentantes são materiais utilizados para unir a interface entre a superficie interna da prótese e o substrato dental, conferindo retenção, favorecendo a longevidade e previsibilidade das reabilitações indiretas. Embora a literatura apresente diversos materiais, os cimentos odontologicos comumente utilizados, que objetivam esse selamento, são o cimento de fostato de zinco e os cimentos resinosos. Neste contexto, conhecer as propriedades fisicas e quimicas desses materiais torna-se imprescindivel para uma aplicação clinica. Baseado nisso, cite 2 características positivas e 2 negativas do cimento fostato de zinco. " ,
    a: [{ text: "Óxido de Zinco e eugenol, porque não permite que a resina polimize", isCorrect: false, isSelected: false },
        { text: "Hidróxido de Cálcio", isCorrect: false },
        { text: "Fosfato de Zinco", isCorrect: false },
        { text: "Positivo - bom isolante termico, boa manipulação, longividade do material. Negativo - não tem boa estetica, possui ácido fosforico agrenor pulpar ", isCorrect: true }
    ]

},
{
    id: 2,
    q: "A busca por materiais odontológicos reabilitadores que esteticos e funcionais satisfatórios, bem como durabilidade, se faz presente dentro das exigências do mercado atual. Por apresentar grande biocompatibilidade e estética, pode-se dizer que, hoje, a cerâmica odontológica apresenta-se como o material sintetico que mais se assemelha á estrutura dental. Logo, a partir da literatura existente, conclui-se que apesar de ainda estar sendo fonte de diversas pesquisas para a melhoria de suas propriedades, quando bem indicada, a cerâmica consegue preencher todos os requisitos para reabilações com sucesso cinico. Sendo assim, explique como deve ser realizado o condiconamento ácido das cerâmicas ácidos ácido sensiveis, citando as etapas e o tempo de condicionamento para cada sistema cerâmico.",
    a: [{ text: "Dureza superficial maior que os ionômetros convencionais", isCorrect: false },
        { text: "Óxido de Zinco e eugenol, porque não permite que a resina polimize", isCorrect: false },
        { text: "Condicionamenot com ácido fluoridreco 10%. Tempo: Cerâ,oca vítrea feldispática: 60seg. Cerâmica vítrea dissilicato de líteo: 20seg. Cerâmica lericíticas: 30seg. Lavar H20 - seca. Aplicar silano + jato de ar e adesivo opcional", isCorrect: true },
        { text: "A Profundidade da cavidade. B. A solubidade comparada a agua. C. Para melhorar o desempenho. D. Reação Quimica", isCorrect: false }
    ]

},

{
    id: 3,
    
      
    q:'Os metais para restauções dentárias foram extensivamente empregados até pouco tempo atrás. Contudo, ainda na atualidade, encontram vasta indicação na reabilitação oral. Principalmente onde há necessidade da presença de materiais com alta resistência mecânica, como é o caso nas proteses parciais fixas, principalmente as mais extensas, e próteses parciais removiveis, onde as tensões mecânicas envolvidas podem ser muito elevadas, pois as infra-estruturas são peças grandes e complexas. Baseado nisso, classifique as ligas odontologicas para fundição de acirdi cin a ADA-1984.',
    a: [{ text: "Particulas menores que os ionômeros convencionais ", isCorrect: false },
        { text: "Dureza superficial maior que os ionômetros convencionais", isCorrect: false },
        { text: "Altamente nobre, nobre e predominantemente nobre ", isCorrect: true },
        { text: "Ácido liofizado agregado ao pó", isCorrect: false }
    ]

},


   





]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correto";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Errado";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 3) {
    id++;
    iterate(id);
    console.log(id);
}

})