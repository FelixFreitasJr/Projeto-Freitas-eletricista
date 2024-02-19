// Função para animar elementos ao rolar
// Esta função é acionada sempre que o usuário rola a página
window.addEventListener('scroll', function() {
  console.log('A página está rolando'); // Verifica se o evento de rolagem está funcionando
  // Seleciona todos os elementos com a classe 'scroll-animado'
  var elementos = document.querySelectorAll('.scroll-animado');
  for (var i = 0; i < elementos.length; i++) {
    // Obtém a posição do elemento em relação ao topo da janela de visualização
    var elementoPosicao = elementos[i].getBoundingClientRect().top;
    // Define a altura da janela de visualização
    var janelaAltura = window.innerHeight / 1.3;
    // Se a posição do elemento for menor que a altura da janela de visualização,
    // adiciona a classe 'mostrar' ao elemento
    if(elementoPosicao < janelaAltura) {
      elementos[i].classList.add('mostrar');
    }
  }
});

// Função para destacar item de menu ao rolar
// Esta função é acionada sempre que o usuário rola a página
window.addEventListener('scroll', function() {
// Seleciona todos os elementos com a classe 'nav-item'
var menuItems = document.querySelectorAll('.nav-item');
for (var i = 0; i < menuItems.length; i++) {
  // Obtém o elemento alvo correspondente ao item de menu atual
  var target = document.querySelector(menuItems[i].dataset.target);
  console.log('Elemento alvo:', target); // Verifica se o elemento alvo está sendo encontrado corretamente
  if (target) {
    // Obtém a posição do elemento alvo em relação à janela de visualização
    var rect = target.getBoundingClientRect();
    // Se o elemento alvo está na janela de visualização,
    // adiciona a classe 'ativo' ao item de menu
    // Caso contrário, remove a classe 'ativo' do item de menu
    if (rect.top < window.innerHeight && rect.bottom >= 0) { // Altera a condição para adicionar a classe 'ativo'
      menuItems[i].classList.add('ativo');
    } else {
      menuItems[i].classList.remove('ativo');
    }
  }
}
});

// Função para exibir mensagem de status do envio do formulário
// Esta função é acionada quando a página é carregada
window.onload = function() {
// Obtém os parâmetros da URL
var urlParams = new URLSearchParams(window.location.search);
// Seleciona o elemento com o id 'status'
var statusElement = document.getElementById('status');
// Se o parâmetro 'status' é 'sucesso', exibe uma mensagem de sucesso
// Se o parâmetro 'status' é 'erro', exibe uma mensagem de erro
if (urlParams.get('status') === 'sucesso') {
  statusElement.textContent = 'Formulário enviado com sucesso!';
  statusElement.style.color = 'green';
} else if (urlParams.get('status') === 'erro') {
  statusElement.textContent = 'Falha ao enviar o formulário. Por favor, tente novamente.';
  statusElement.style.color = 'red';
}
};

// Aplicar a máscara de telefone
// Quando o documento estiver pronto, execute a função
$(document).ready(function(){
// Função para determinar a máscara do telefone com base no número de dígitos
var SPMaskBehavior = function (val) {
  // Se o número de dígitos (excluindo caracteres não numéricos) for 11, use a máscara para celular
  // Caso contrário, use a máscara para telefone fixo
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
};

// Opções para a máscara do telefone
var spOptions = {
  // Quando uma tecla é pressionada, aplique a máscara ao campo de telefone
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

// Aplica a máscara ao campo de telefone
$('#telefone').mask(SPMaskBehavior, spOptions);
});

document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault(); // Isso impede que o formulário seja enviado

  // Pegue os valores dos campos de texto
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var tipoContato = document.getElementById('tipo').value;
  var mensagem = document.getElementById('mensagem').value;

  // Codifique os valores para uso em uma URL
  var texto = 'Nome: ' + encodeURIComponent(nome) + '%0A' +
              'E-mail: ' + encodeURIComponent(email) + '%0A' +
              'Telefone: ' + encodeURIComponent(telefone) + '%0A%0A' +
              'Tipo de Contato: ' + encodeURIComponent(tipoContato) + '%0A%0A' +
              'Mensagem: ' + encodeURIComponent(mensagem);

  // Crie o URL do WhatsApp
  var urlWhatsApp = "https://wa.me/5521981099990?text=" + texto;

  // Abra o URL do WhatsApp em uma nova janela
  window.open(urlWhatsApp);
});