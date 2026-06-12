let intervaloCoracoes;
let pontosBola = 0;

function rolarParaHistoria() {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}

function abrirCarta() {
    document.getElementById("carta").style.display = "block";
}

function fecharCarta() {
    document.getElementById("carta").style.display = "none";
}

function abrirJogo(numero) {
    if (numero === 1) {
        abrirJogoVelha();
        return;
    }
    if(numero === 2){
    abrirMemoria();
    return;
    }
    if (numero === 3) {
        abrirPegueCoracoes();
        return;
    }
    if (numero === 4) {
        abrirJogoPulo();
        return;
    }
    if(numero === 5){
    abrirBola();
    return;
    }
    if (numero === 6) {
        abrirQuiz();
        return;
    }
    if(numero === 7){
    abrirEncontreCoracao();
    return;
    }
    if(numero === 8){
    abrirPuzzle();
    return;
    }
    if(numero === 9){
    abrirSorte();
    return;
    }
    if(numero === 10){
    abrirFinal();
    return;
    }
    const jogos = {
        2: "Jogo da Memória ❤️",
        5: "Mantenha a Bola no Ar ❤️",
        7: "Encontre o Coração ❤️",
        8: "Quebra-Cabeça ❤️",
        9: "Encontre o Presente ❤️",
        10: "Surpresa Final ❤️"
    };

    alert(jogos[numero]);
}

let jogadorAtual = "X";
let jogoFinalizado = false;

function abrirJogoVelha() {
    document.getElementById("modalJogoVelha").style.display = "block";
}

function fecharJogoVelha() {
    document.getElementById("modalJogoVelha").style.display = "none";
    let casas = document.querySelectorAll(".casa");
    casas.forEach(casa => {
        casa.innerHTML = "";
    });
    document.getElementById("mensagemJogo").innerHTML = "";
    jogadorAtual = "X";
    jogoFinalizado = false;
}

function jogar(botao) {
    if (jogoFinalizado || botao.innerHTML !== "") {
        return;
    }
    botao.innerHTML = jogadorAtual;
    verificarVitoria();
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificarVitoria() {
    let casas = document.querySelectorAll(".casa");
    let c = [];
    casas.forEach(casa => {
        c.push(casa.innerHTML);
    });

    const combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of combinacoes) {
        let a = combo[0];
        let b = combo[1];
        let d = combo[2];

        if (c[a] !== "" && c[a] === c[b] && c[a] === c[d]) {
            jogoFinalizado = true;
            document.getElementById("mensagemJogo").innerHTML = "Você foi minha melhor escolha ❤️";
            criarCoracoes();
            return;
        }
    }

    let preenchidas = 0;
    c.forEach(valor => {
        if (valor !== "") preenchidas++;
    });

    if (preenchidas === 9) {
        jogoFinalizado = true;
        document.getElementById("mensagemJogo").innerHTML = "Empate! Tentem novamente ❤️";
        setTimeout(() => { }, 2000)
        area.innerHTML = "";

let posicoes = [0,1,2,3,4,5,6,7,8];

let trocas = 0;

let animacao = setInterval(() => {

    embaralhar(posicoes);

    area.innerHTML = "";

    posicoes.forEach((valor, indice) => {

        let presente = document.createElement("button");

        presente.className = "presente";

        presente.innerHTML = "🎁";

        area.appendChild(presente);

    });

    trocas++;

    if(trocas >= 8){

        clearInterval(animacao);

        caixaPremiada = posicoes.indexOf(caixaPremiada);

        area.innerHTML = "";

        for(let i = 0; i < 9; i++){

            let presente = document.createElement("button");

            presente.className = "presente";

            presente.innerHTML = "🎁";

            presente.onclick = function(){

                if(i === caixaPremiada){

                    presente.innerHTML = "❤️";

                    document.getElementById("mensagemSorte").innerHTML =
                    "Você encontrou meu coração ❤️";

                    criarCoracoes();

                }else{

                    presente.innerHTML = "💔";

                    document.getElementById("mensagemSorte").innerHTML =
                    "Errou! Vamos tentar novamente ❤️";

                    setTimeout(() => {
                        gerarPresentes();
                    },1500);
                }
            };

            area.appendChild(presente);
        }

        document.getElementById("mensagemSorte").innerHTML =
        "Agora escolha o presente certo ❤️";
    }

}, 700);
    }
}

function tocarMusica() {
    document.getElementById("musica").play();
}

let perguntaAtual = 0;
const perguntasQuiz = [
    {
        pergunta: "Onde foi o nosso primeiro beijo?",
        opcoes: ["No condomínio", "No parque", "Na escola", "Na casa de um amigo"],
        correta: 0
    },
    {
        pergunta: "Quem disse 'eu te amo' primeiro?",
        opcoes: ["Lívia", "Kayky", "Os dois juntos", "Ninguém lembra"],
        correta: 1
    },
    {
        pergunta: "Qual é o nossa saida favorita?",
        opcoes: ["Hambúrguer", "Pizza", "Japa", "Massa"],
        correta: 2
    }
];

function abrirQuiz() {
    perguntaAtual = 0;
    document.getElementById("modalQuiz").style.display = "block";
    mostrarPergunta();
}

function fecharQuiz() {
    document.getElementById("modalQuiz").style.display = "none";
    document.getElementById("mensagemQuiz").innerHTML = "";
}

function mostrarPergunta() {
    if (perguntaAtual >= perguntasQuiz.length) {
        document.getElementById("perguntaQuiz").innerHTML = "🎉 Você acertou tudo! Você me conhece mesmo! ❤️";
        document.getElementById("opcoesQuiz").innerHTML = "";
        criarCoracoes();
        return;
    }

    let dadosPergunta = perguntasQuiz[perguntaAtual];
    document.getElementById("perguntaQuiz").innerHTML = dadosPergunta.pergunta;
    document.getElementById("mensagemQuiz").innerHTML = "";

    let containerOpcoes = document.getElementById("opcoesQuiz");
    containerOpcoes.innerHTML = "";

    dadosPergunta.opcoes.forEach((opcao, index) => {
        let RecordBotao = document.createElement("button");
        RecordBotao.innerHTML = opcao;
        RecordBotao.onclick = function() { verificarResposta(index); };
        containerOpcoes.appendChild(RecordBotao);
    });
}

function verificarResposta(indiceSelecionado) {
    let dadosPergunta = perguntasQuiz[perguntaAtual];
    let mensagem = document.getElementById("mensagemQuiz");

    if (indiceSelecionado === dadosPergunta.correta) {
        mensagem.style.color = "green";
        mensagem.innerHTML = "Acertou! 🥰";
        perguntaAtual++;
        setTimeout(mostrarPergunta, 1500);
    } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Errou! Tente pensar um pouquinho mais... 👀";
    }
}

const dataInicio = new Date(2025, 1, 11, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    if (document.getElementById("dias")) {
        document.getElementById("dias").innerText = dias;
        document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
        document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
        document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;
    }
}
atualizarContador();
setInterval(atualizarContador, 1000);

let pontosCoracoes = 0;
let jogoCoracoesAtivo = false;

function abrirPegueCoracoes(){
    document.getElementById("modalCoracoes").style.display = "block";
    jogoCoracoesAtivo = true;
    pontosCoracoes = 0;
    document.getElementById("cesta").style.left = "200px";
    if(document.getElementById("pontuacao")) {
        document.getElementById("pontuacao").innerHTML = "0";
    }
    if(document.getElementById("mensagemCoracoes")) {
        document.getElementById("mensagemCoracoes").innerHTML = "";
    }
}

function fecharPegueCoracoes(){
    document.getElementById("modalCoracoes").style.display = "none";
    jogoCoracoesAtivo = false;
}

function criarCoracaoCaindo(){
    if(!jogoCoracoesAtivo) return;

    let coracao = document.createElement("div");
    coracao.innerHTML = "❤️";
    coracao.style.position = "absolute";
    coracao.style.left = (Math.random() * 80) + "%";
    coracao.style.top = "0px";
    coracao.style.fontSize = "30px";

    let area = document.getElementById("areaJogoCoracoes");
    if(area) {
        area.appendChild(coracao);
    } else {
        return;
    }

    let posicao = 0;
    let queda = setInterval(function(){
        if(!jogoCoracoesAtivo) {
            clearInterval(queda);
            coracao.remove();
            return;
        }

        posicao += 5;
        coracao.style.top = posicao + "px";

        let cesta = document.getElementById("cesta");
        if(cesta) {
            let xCoracao = coracao.offsetLeft;
            let xCesta = cesta.offsetLeft;

            if(posicao > 300 && xCoracao > xCesta - 40 && xCoracao < xCesta + 40){
                clearInterval(queda);
                coracao.remove();
                pontosCoracoes++;
                document.getElementById("pontuacao").innerHTML = pontosCoracoes;

                if(pontosCoracoes >= 10){
                    document.getElementById("mensagemCoracoes").innerHTML = "Você capturou todos os meus corações ❤️";
                    criarCoracoes();
                    jogoCoracoesAtivo = false;
                }
                return;
            }
        }

        if(posicao > 350){
            clearInterval(queda);
            coracao.remove();
        }
    }, 50);
}

setInterval(function(){
    if(jogoCoracoesAtivo){
        criarCoracaoCaindo();
    }
}, 1000);

let jogoPuloAtivo = false;
let pulando = false;
let tempoSobrevivido = 0;
let intervaloPulo;

function abrirJogoPulo(){
    if (intervaloPulo) {
        clearInterval(intervaloPulo);
    }
    
    document.getElementById("modalPulo").style.display = "block";
    jogoPuloAtivo = true;
    tempoSobrevivido = 0;
    document.getElementById("mensagemPulo").innerHTML = "";
    iniciarObstaculo();

    intervaloPulo = setInterval(() => {
        if(!jogoPuloAtivo) {
            clearInterval(intervaloPulo);
            return;
        }
        
        tempoSobrevivido++;

        if(tempoSobrevivido >= 20){
            document.getElementById("mensagemPulo").innerHTML = "Nosso amor supera qualquer obstáculo ❤️";
            criarCoracoes();
            jogoPuloAtivo = false;
            clearInterval(intervaloPulo);
        }
    }, 1000);
}

function fecharJogoPulo(){
    document.getElementById("modalPulo").style.display = "none";
    jogoPuloAtivo = false;
    clearInterval(intervaloPulo);
}

function pular(){
    if(pulando || !jogoPuloAtivo) return;
    pulando = true;

    let personaje = document.getElementById("personagem");
    if(personaje) {
        personaje.style.bottom = "150px"; 
        setTimeout(() => {
            personaje.style.bottom = "0px";
            pulando = false;
        }, 350);  
    }
}

function criarCoracoes(){
    for(let i = 0; i < 25; i++){
        let coracao = document.createElement("div");
        coracao.innerHTML = "❤️";
        coracao.classList.add("coracao-animado");
        coracao.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }
}
function abrirMemoria(){

    document.getElementById("modalMemoria").style.display = "block";

    iniciarMemoria();

}
function fecharMemoria(){

    document.getElementById("modalMemoria").style.display = "none";
}

function iniciarMemoria(){

    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
    paresEncontrados = 0;

    let tabuleiro = document.getElementById("tabuleiroMemoria");

    tabuleiro.innerHTML = "";

    document.getElementById("mensagemMemoria").innerHTML = "";

    cartasMemoria.sort(() => Math.random() - 0.5);

    cartasMemoria.forEach(simbolo => {

        let carta = document.createElement("button");

        carta.className = "cartaMemoria";

        carta.innerHTML = "❓";

        carta.dataset.simbolo = simbolo;

        carta.onclick = function(){
            virarCarta(carta);
        };

        tabuleiro.appendChild(carta);
    });
}
let cartasMemoria = [
    "❤️","❤️",
    "💖","💖",
    "🥰","🥰",
    "😍","😍",
    "💕","💕",
    "💘","💘"
];

let primeiraCarta = null;
let segundaCarta = null;
let paresEncontrados = 0;
let bloqueado = false;
function virarCarta(carta){

    if(bloqueado) return;

    if(carta.innerHTML !== "❓") return;

    carta.innerHTML = carta.dataset.simbolo;

    if(primeiraCarta === null){

        primeiraCarta = carta;
        return;
    }

    segundaCarta = carta;

    bloqueado = true;

    if(
        primeiraCarta.dataset.simbolo ===
        segundaCarta.dataset.simbolo
    ){

        paresEncontrados++;

        primeiraCarta = null;
        segundaCarta = null;

        bloqueado = false;

        if(paresEncontrados === 6){

            document.getElementById("mensagemMemoria").innerHTML =
            "Você encontrou todas as nossas lembranças ❤️";

            criarCoracoes();
        }

    }else{

        setTimeout(() => {

            primeiraCarta.innerHTML = "❓";
            segundaCarta.innerHTML = "❓";

            primeiraCarta = null;
            segundaCarta = null;

            bloqueado = false;

        }, 1000);

    }
}
let jogoBolaAtivo = false;
let tempoBola = 0;
let posicaoBola = 100;
let intervaloBola;
let intervaloTempoBola;

function abrirBola(){

    document.getElementById("modalBola").style.display = "block";

    iniciarBola();
}
function fecharBola(){

    document.getElementById("modalBola").style.display = "none";

    jogoBolaAtivo = false;

    clearInterval(intervaloCoracoes);
}
function iniciarBola(){

    clearInterval(intervaloCoracoes);

    jogoBolaAtivo = true;

    pontosBola = 0;


    document.getElementById("tempoBola").innerHTML = "0";
    document.getElementById("mensagemBola").innerHTML = "";

    let area = document.getElementById("areaBola");
    area.innerHTML = "";

    intervaloCoracoes = setInterval(criarCoracaoClique, 800);
    
}
function criarCoracaoClique(){

    if(!jogoBolaAtivo) return;

    let coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "absolute";
    coracao.style.fontSize = "40px";

   let area = document.getElementById("areaBola");

coracao.style.left =
    Math.floor(Math.random() * (area.clientWidth - 50)) + "px";
coracao.style.color = "red";
coracao.style.zIndex = "9999";

    coracao.style.top = "0px";

    document
        .getElementById("areaBola")
        .appendChild(coracao);

    let posicao = 0;

    let queda = setInterval(function(){

        posicao += 5;

coracao.style.top = posicao + "px";

if(posicao > area.clientheight - 50){

    clearInterval(queda);

    coracao.remove();

    if(jogoBolaAtivo){

        jogoBolaAtivo = false;

        clearInterval(intervaloCoracoes);

        document.getElementById("mensagemBola").innerHTML =
        "Você deixou um coração cair 💔 Reiniciando...";

        setTimeout(() => {

            abrirBola();

        }, 1500);
    }
}

    },50);

    coracao.onclick = function(){

        clearInterval(queda);

        coracao.remove();

        pontosBola++;

        document.getElementById("tempoBola").innerHTML =
        pontosBola;

        if(pontosBola >= 20){

            jogoBolaAtivo = false;

            clearInterval(intervaloCoracoes);

            document.getElementById("mensagemBola").innerHTML =
            "Você cuidou de todos os meus corações ❤️";

            criarCoracoes();
        }

    };
}
let pontosCoracao = 0;

function abrirEncontreCoracao(){

    document.getElementById("modalCoracao").style.display = "block";

    pontosCoracao = 0;

    document.getElementById("mensagemCoracao").innerHTML = "";

    gerarRodadaCoracao();
}

function fecharEncontreCoracao(){

    document.getElementById("modalCoracao").style.display = "none";
}

function gerarRodadaCoracao(){

    let area = document.getElementById("areaCoracao");

    area.innerHTML = "";

    let quantidade = 25;

let posicaoCorreta = Math.floor(Math.random() * quantidade);

for(let i = 0; i < quantidade; i++){

        let item = document.createElement("div");

        item.className = "item-coracao";

        item.innerHTML = i === posicaoCorreta ? "❤️" : "💔";

        item.onclick = function(){

            if(i === posicaoCorreta){

                pontosCoracao++;

                if(pontosCoracao >= 5){

                    document.getElementById("mensagemCoracao").innerHTML =
                    "Você sempre encontra meu coração ❤️";

                    criarCoracoes();

                }else{

                    gerarRodadaCoracao();
                }

            }else{

                document.getElementById("mensagemCoracao").innerHTML =
                "Ops! Esse não era 😅";
            }
        };

        area.appendChild(item);
    }
}
let pecasPuzzle = [1,2,3,4,5,6,7,8,9];
let primeiraPecaPuzzle = null;

function abrirPuzzle(){

    let modal = document.getElementById("modalPuzzle");

    if(!modal){
        alert("Modal Puzzle não encontrado");
        return;
    }

    modal.style.display = "block";

    iniciarPuzzle();
}

function fecharPuzzle(){

    document.getElementById("modalPuzzle").style.display = "none";
}
function iniciarPuzzle(){

    let mensagem =
        document.getElementById("mensagemPuzzle");

    let tabuleiro =
        document.getElementById("tabuleiroPuzzle");

    if(!mensagem || !tabuleiro){
        alert("tabuleiroPuzzle ou mensagemPuzzle não encontrado");
        return;
    }

    mensagem.innerHTML = "";

    primeiraPecaPuzzle = null;

    pecasPuzzle.sort(() => Math.random() - 0.5);

    tabuleiro.innerHTML = "";

    pecasPuzzle.forEach(numero => {

        let peca = document.createElement("button");

        peca.className = "pecaPuzzle";

        peca.dataset.numero = numero;

        let x = ((numero - 1) % 3) * 100;
        let y = Math.floor((numero - 1) / 3) * 100;

        peca.style.backgroundImage =
            "url('quebracabeca.jpg')";

        peca.style.backgroundPosition =
            `-${x}px -${y}px`;

        peca.onclick = function(){
            selecionarPecaPuzzle(peca);
        };

        tabuleiro.appendChild(peca);
    });
}

function selecionarPecaPuzzle(peca){

    if(!primeiraPecaPuzzle){

        primeiraPecaPuzzle = peca;

        peca.style.border = "3px solid red";

        return;
    }

    let tempBackground =
        primeiraPecaPuzzle.style.backgroundPosition;

    let tempNumero =
        primeiraPecaPuzzle.dataset.numero;

    primeiraPecaPuzzle.style.backgroundPosition =
        peca.style.backgroundPosition;

    primeiraPecaPuzzle.dataset.numero =
        peca.dataset.numero;

    peca.style.backgroundPosition =
        tempBackground;

    peca.dataset.numero =
        tempNumero;

    primeiraPecaPuzzle.style.border = "none";

    primeiraPecaPuzzle = null;

    verificarPuzzle();
}

function verificarPuzzle(){

    let pecas =
        document.querySelectorAll(".pecaPuzzle");

    let correto = true;

    pecas.forEach((peca, indice) => {

        if(parseInt(peca.dataset.numero) !== indice + 1){

            correto = false;
        }

    });

    if(correto){

        document.getElementById("mensagemPuzzle").innerHTML =
        "Você montou nossa foto! ❤️";

        criarCoracoes();
    }
}
let caixaPremiada = 0;

function abrirSorte(){

    document.getElementById("modalSorte").style.display = "block";

    gerarPresentes();
}

function fecharSorte(){

    document.getElementById("modalSorte").style.display = "none";
}
function gerarPresentes(){

    let area = document.getElementById("areaSorte");

    area.innerHTML = "";

    presentes = [];

    indiceCoracao = Math.floor(Math.random() * 9);
 posicoes = [];

let imagens = [];

for(let i = 0; i < 9; i++){

    if(i === indiceCoracao){
        imagens.push("❤️");
    }else{
        imagens.push("🎀");
    }
}
for(let i = 0; i < 9; i++){

    posicoes.push({
        left: (i % 3) * 120,
        top: Math.floor(i / 3) * 120
    });

}
    for(let i = 0; i < 9; i++){

    let presente = document.createElement("button");

    presente.className = "presente";

    presente.innerHTML = imagens[i];

    presente.style.left = (i % 3) * 120 + "px";
     
    presente.style.top = Math.floor(i / 3) * 120 + "px";

    presentes.push(presente);

    area.appendChild(presente);
}

   setTimeout(() => {

    presentes.forEach(p => {
        p.innerHTML = "🎁";
    });

    document.getElementById("mensagemSorte").innerHTML =
    "Preste atenção! Os presentes vão embaralhar... ❤️";

    setTimeout(() => {

        misturarPresentes();

    }, 1000);

}, 3000);
}
function misturarPresentes(){

    let vezes = 0;

    let animacao = setInterval(() => {

        let a = Math.floor(Math.random() * 9);
        let b = Math.floor(Math.random() * 9);

        while(a === b){
            b = Math.floor(Math.random() * 3);
        }

        let temp = posicoes[a];
        posicoes[a] = posicoes[b];
        posicoes[b] = temp;

        presentes.forEach((presente, indice) => {
           presente.style.left = posicoes[indice].left + "px";
presente.style.top = posicoes[indice].top + "px";
        });

        vezes++;

        if(vezes >= 12){

            clearInterval(animacao);

            ativarEscolha();
        }

    }, 900);
}
function ativarEscolha(){

    presentes.forEach((presente, indice) => {

        presente.onclick = function(){

            if(indice === indiceCoracao){

                presente.innerHTML = "❤️";

                document.getElementById("mensagemSorte").innerHTML =
                "Você encontrou meu coração ❤️";

                criarCoracoes();

            }else{

                presente.innerHTML = "💔";

                document.getElementById("mensagemSorte").innerHTML =
                "Errou! Reiniciando... ❤️";

                setTimeout(() => {
                    gerarPresentes();
                }, 1500);
            }
        };
    });
}
function iniciarObstaculo(){

    let obstaculo = document.getElementById("obstaculo");

    if(!obstaculo) return;

    let posicao = 500;

    let movimento = setInterval(() => {

        if(!jogoPuloAtivo){
            clearInterval(movimento);
            return;
        }

        posicao -= 10;

        obstaculo.style.left = posicao + "px";

        let personagem =
            document.getElementById("personagem");

        let personagemRect =
            personagem.getBoundingClientRect();

        let obstaculoRect =
            obstaculo.getBoundingClientRect();

        if(
            personagemRect.right > obstaculoRect.left &&
            personagemRect.left < obstaculoRect.right &&
            personagemRect.bottom > obstaculoRect.top &&
            personagemRect.top < obstaculoRect.bottom
        ){

            document.getElementById("mensagemPulo").innerHTML =
            "Ops! Você bateu no obstáculo ❤️";

            clearInterval(movimento);

            setTimeout(() => {
                abrirJogoPulo();
            },1500);

            return;
        }

        if(posicao < -50){
            posicao = 500;
        }

    },30);
}
document.addEventListener("keydown", function(evento){

    // Jogo do pulo
    if(jogoPuloAtivo && evento.code === "Space"){

        evento.preventDefault();
        pular();
        return;
    }

    // Jogo da cesta
    let cesta = document.getElementById("cesta");

    if(cesta){

        let posicao = parseInt(cesta.style.left) || 200;

        if(evento.key === "ArrowLeft"){
            posicao -= 20;
        }

        if(evento.key === "ArrowRight"){
            posicao += 20;
        }

        if(posicao < 0){
            posicao = 0;
        }

        if(posicao > 360){
            posicao = 360;
        }

        cesta.style.left = posicao + "px";
    }

});
function abrirFinal(){

    document.getElementById("modalFinal").style.display = "block";

    document.getElementById("perguntaFinal").style.display = "none";

    document.getElementById("mensagemFinal").innerHTML = "";
}

function fecharFinal(){

    document.getElementById("modalFinal").style.display = "none";
}

function mostrarPerguntaFinal(){

    document.getElementById("perguntaFinal").style.display = "block";
}
function respostaSim(){

    document.getElementById("mensagemFinal").innerHTML =
    `
    ❤️ Eu te amo infinitamente! ❤️
    <br><br>
    Você chegou ao fim dos desafios,
    mas ainda não chegou ao fim da surpresa...
    <br><br>
    Desça até o final da página e clique no ❤️.
    Uma última carta está esperando por você. 💌❤️
    `;

    criarCoracoes();
}
