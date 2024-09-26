'use strict'; //Ativa o modo restrito
// Código para cosumo de API da ViaCEP
// https://viacep.com.br/ws/86031110/json/
 
// Limpar consulta do form já realizada
  const linparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('setado').value = '';
}
 
//verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// verifica o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
 
const preencherFormulario = (endereco) =>{
  document.getElementById('logradouro').value = endereco.logradouro;
  // coloca o valor de logadouro da API dentro do campo logadouro do formulario
  document.getElementById('bairo').value = endereco.bairo;
  // coloca o valor de bairo da API dentro do campo logadouro do formulario
  document.getElementById('localidade').value = endereco.localidade;
  // coloca o valor de localidade da API dentro do campo logadouro do formulario
  document.getElementById('uf').value = endereco.uf;
  // coloca o valor de uf da API dentro do campo logadouro do formulario
}
 
// Função para consumo de API ViaCep
const pesquisarCep = async() => {
  limparFormulario();
const url = `http://viacep.com.br/ws/${cep.value}/json/`;
if(cepValido(cep.value)){
    const dados    = await fetch(url);
    const addres   = await dados.json();
 
    if(addres.hasOwnProperty('erro')){
      alert('CEP não encontrado');
    }else{
        preencherFormulario(addres);
    }
 
}else{
   alert('CEP Incorreto')
}
}