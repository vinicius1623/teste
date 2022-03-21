function Calcular() {
  
  // Inputs
  var valorTensao = document.getElementById("tensao");
  var tensao = valorTensao.value;
  var valorTensaoNumerico = parseFloat(tensao);
  
  var valorCorrente = document.getElementById("corrente")
  var corrente = valorCorrente.value;
  var valorCorrenteNumerico = parseFloat(corrente)
  
  var valorComprimento = document.getElementById("comprimento")
  var comprimento = valorComprimento.value
  var valorComprimentoNumerico = parseFloat(comprimento)
  
  var valorSecao = document.getElementById("secao")
  var secao = valorSecao.value
  var valorSecaoNumerico = parseFloat(secao)
  
 
  
  // Cálculo Resistência
  
  var valorResistencia =  (0.017 * valorComprimentoNumerico * 2) / valorSecaoNumerico

  
  // Cálculo Queda 
  
  var valorQueda = valorResistencia * valorCorrenteNumerico
  var valorPorcentagem = (valorQueda / valorTensaoNumerico) * 100
  var valorFinal = valorPorcentagem.toFixed(2)
  
  //daqui pra baixo é como vai ser exibido o resultado
  
  
  var elementoValorCalculado = document.getElementById("valorCalculado");
  var valorCalculado = "A queda de tensão é " + valorFinal + "%" ;
  elementoValorCalculado.innerHTML = valorCalculado;
  
  
}

//TRIFÁSICO

function CalcularTri() {
  
  // Inputs
  var valorTensao = document.getElementById("tensao");
  var tensao = valorTensao.value;
  var valorTensaoNumerico = parseFloat(tensao);
  
  var valorCorrente = document.getElementById("corrente")
  var corrente = valorCorrente.value;
  var valorCorrenteNumerico = parseFloat(corrente)
  
  var valorComprimento = document.getElementById("comprimento")
  var comprimento = valorComprimento.value
  var valorComprimentoNumerico = parseFloat(comprimento)
  
  var valorSecao = document.getElementById("secao")
  var secao = valorSecao.value
  var valorSecaoNumerico = parseFloat(secao)
  
 
  
  // Cálculo Resistência cobre=0,017 aluminio = 0,0292
  
  var valorResistencia =  (0.0277 * valorComprimentoNumerico * 2) / valorSecaoNumerico
  var valorResistenciaTri = (0.0277 * valorComprimentoNumerico * 1.732) / valorSecaoNumerico
  
  // Cálculo Queda 
  
  var valorQueda = valorResistenciaTri* valorCorrenteNumerico
  var valorPorcentagem = (valorQueda / valorTensaoNumerico) * 100
  var valorFinal = valorPorcentagem.toFixed(2)
  
  //daqui pra baixo é como vai ser exibido o resultado
  
  
  var elementoValorCalculado = document.getElementById("valorCalculado");
  var valorCalculado = "A queda de tensão é " + valorFinal + "%" ;
  elementoValorCalculado.innerHTML = valorCalculado;
  
}