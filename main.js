const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Quando você está aprendendo algo novo, o que mais te ajuda?",
        alternativas: [
            {
                texto: "Ver imagens, esquemas, gráficos ou mapas.",
                afirmacao: "Você aprende melhor quando consegue visualizar as informações em diagramas e imagens."

            },
            {
                texto: "Ouvir explicações e conversar sobre o assunto.",
                afirmacao: "Você valoriza ouvir boas explicações e trocar ideias para consolidar o conhecimento."

            }
        ]
    },
    {
        enunciado: "Na hora de revisar o conteúdo para uma prova, o que você prefere?",
        alternativas: [
            {
                texto: "Refazer exercícios e colocar a mão na massa.",
                afirmacao: "Você consolida o conhecimento praticando e experimentando na prática."
            },
            {
                texto: "Revisar resumos, mapas mentais ou anotações.",
                afirmacao: "Você organiza os conteúdos em resumos e isso torna a revisão mais eficiente."
            }
        ]
    },
    {
        enunciado: "Quando o professor explica um conteúdo difícil, o que te ajuda mais?",
        alternativas: [
            {
                texto: "Que ele faça exemplos passo a passo na lousa.",
                afirmacao: "Você aprende melhor acompanhando processos organizados e exemplos práticos."
            },
            {
                texto: "Que ele conte histórias, dê comparações ou faça analogias.",
                afirmacao: "Você conecta melhor os conteúdos quando eles estão ligados a situações cotidianas."
            }
        ]
    },
    {
        enunciado: "Se precisa estudar sozinho em casa, qual estratégia escolhe?",
        alternativas: [
            {
                texto: "Assistir videoaulas ou buscar podcasts sobre o tema.",
                afirmacao: "Você aproveita recursos digitais para aprender com mais dinamismo."
            },
            {
                texto: "Escrever resumos e fazer listas de exercícios.",
                afirmacao: "Você prefere organizar o conteúdo por conta própria para fixar melhor."
            }
        ]
    },
    {
        enunciado: "Em um trabalho em grupo, qual papel você assume naturalmente?",
        alternativas: [
            {
                texto: "A pessoa que organiza e escreve as ideias de todos.",
                afirmacao: "Você tem perfil organizado e gosta de estruturar as ideias do grupo."
            },
            {
                texto: "A pessoa que explica oralmente e motiva os colegas.",
                afirmacao: "Você gosta de comunicar as ideias e ajudar os colegas a compreenderem melhor."
            }
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se fosse possível...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();                                                    
