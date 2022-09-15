var carta1 = {
    nome: "Bulbasaur",
    imagem: "https://i.pinimg.com/originals/e0/92/1e/e0921e6715a03d3b52ee653a27556850.jpg",
    atributos: { Ataque: 5, Defesa: 8, Especial: 6 }
  }
  
  var carta2 = {
    nome: "Squirtle",
    imagem: "https://i.pinimg.com/736x/67/2d/88/672d8824ec4dfa01a2a31ceceb789ae8.jpg",
    atributos: { Ataque: 4, Defesa: 9, Especial: 7 }
  }
  
  var carta3 = {
    nome: "Charmander",
    imagem: "https://i.pinimg.com/736x/16/3c/f0/163cf0e64be3285899c41f0d39046219--pokemon-it-pokemon-craft.jpg",
    atributos: { Ataque: 6, Defesa: 5, Especial: 9 }
  }
  
  var carta4 = {
    nome: "Pikachu",
    imagem: "https://www.kindpng.com/picc/m/46-468771_pikachu-png-transparent-pikachu-png-png-download.png",
    atributos: { Ataque: 4, Defesa: 6, Especial: 8 }
  }
  
  var cartas = [carta1, carta2, carta3, carta4]
  var cartaMaquina
  var cartaJogador
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while(numeroCartaMaquina == numeroCartaJogador){
      numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirCartaJogador();
  }
  
  function obterAtributoSelecionado(){
    var inputRadioAtributo = document.getElementsByName('atributo');
    
    for (var i = 0; i < inputRadioAtributo.length; i++) {
      if (inputRadioAtributo[i].checked == true) {
        return inputRadioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var atributoSelecionado = obterAtributoSelecionado();
    var elementoResultado = document.getElementById('resultado');
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    if(valorCartaJogador > valorCartaMaquina){
      divResultado = "<p class='resultado-final'>Parabéns, você venceu!</p>";
    }else if(valorCartaJogador < valorCartaMaquina){
       divResultado = "<p class='resultado-final'>Que pena, você perdeu!</p>";
    }else{
      divResultado = "<p class='resultado-final'>Empate!</p>";
    }
    elementoResultado.innerHTML = divResultado;
    
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHtml = '<div id="opcoes" class="carta-status">'
    
    var opcoesTexto = '';
    for (var atributo in cartaJogador.atributos){
      opcoesTexto = opcoesTexto + "<input checked type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
  }
  
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    
    var tagHtml = '<div id="opcoes" class="carta-status">'
    
    var opcoesTexto = '';
    for (var atributo in cartaMaquina.atributos){
      opcoesTexto = opcoesTexto +  "<p value='" + atributo + "'>" + atributo + " " +       cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
  }