var jogadorUM = {
    icone:
      "https://downloadwap.com/thumbs2/wallpapers/p2/2019/technology/22/5e05053913658766.jpg",
    nome: "Jogador Um",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var jogadorDois = {
    icone:
      "https://i.pinimg.com/originals/f8/b7/ab/f8b7ab4b3011f99ce7d7bdd8a970121c.jpg",
    nome: "Jogador Dois",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var jogadores = [jogadorUM, jogadorDois];
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return (jogador.pontos = pontos);
  }
  
  calculaPontos(jogadorUM);
  calculaPontos(jogadorDois);
  
  function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
  
    for (var i = 0; i < jogadores.length; i++) {
      elemento += `<tr>`;
      elemento += `<td><img class="icone-jogador" src=${jogadores[i].icone}></td>`;
      elemento += `<td>${jogadores[i].nome}</td>`;
      elemento += `<td>${jogadores[i].vitorias}</td>`;
      elemento += `<td>${jogadores[i].empates}</td>`;
      elemento += `<td>${jogadores[i].derrotas}</td>`;
      elemento += `<td>${jogadores[i].pontos}</td>`;
      elemento += `<td><button class="botao-acao" onClick="adicionarVitoria(${i})">Vitória</button></td>`;
      elemento += `<td><button class="botao-acao" onClick="adicionarEmpate(${i})">Empate</button></td>`;
      elemento += `<td><button class="botao-reset" onClick="zerarPontos(${i})"><img class="reset-icon" src="http://cdn.onlinewebfonts.com/svg/img_130208.png"></button></td>`;
      elemento += `<td><button class="botao-reset" onClick="removerJogador(${i})"><img class="remove-icon" src="https://icons.veryicon.com/png/o/miscellaneous/300-free-vector-icons/bin-32.png"></button></td>`;
      elemento += `</tr>`;
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
  
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
  
    jogador.vitorias++;
  
    for (var i = 0; i < jogadores.length; i++) {
      if (jogadores[i] != jogador) {
        adicionarDerrota(i);
      }
    }
  
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].empates++;
      calculaPontos(jogadores[i]);
    }
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
  
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
  }
  
  function zerarPontos(i) {
    var jogador = jogadores[i];
  
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function removerJogador(i) {
    jogadores.splice(i, 1);
    exibeJogadoresNaTela(jogadores);
  }
  
  var modal = document.getElementById("modal-novo-jogador");
  
  function AdicionaJogador() {
    var input = document.getElementById("nome-jogador");
    var inputIcone = document.getElementById("icone-jogador");
  
    var jogador = {
      icone: inputIcone.value,
      nome: input.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
  
    modal.classList.toggle("modal-novo-jogador--ativo");
  
    jogadores.push(jogador);
    exibeJogadoresNaTela(jogadores);
  
    input.value = "";
    inputIcone.value = "";
  }
  
  function AdicionaJogadorModal() {
    var input = document.getElementById("nome-jogador");
    var inputIcone = document.getElementById("icone-jogador");
  
    if (inputIcone.value.endsWith(".jpg") || inputIcone.value.endsWith(".png")) {
      modal.classList.toggle("modal-novo-jogador--ativo");
  
      modal.innerHTML = `
      <p class="modal-novo-jogador__titulo">Gostaria de adicionar o seguinte jogador?</p>
      <div class="modal-novo-jogador__jogador">
        <img src=${inputIcone.value}>
        <p class="modal-novo-jogador__nome">${input.value}</p>
      </div>
      <div class="modal-novo-jogador__botoes">
        <button type="button" onclick="ModalToggle()">Cancelar</button>
        <button type="button" onclick="AdicionaJogador()">Adicionar</button>
      </div>
    `;
    } else {
      alert("Insira uma URL de imagem válida. Formatos aceitos: .jpg e .png");
    }
  }
  
  function ModalToggle() {
    modal.classList.toggle("modal-novo-jogador--ativo");
  }
  
  function zerarTabela() {
    for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].empates = 0;
      jogadores[i].derrotas = 0;
  
      calculaPontos(jogadores[i]);
    }
    exibeJogadoresNaTela(jogadores);
  }