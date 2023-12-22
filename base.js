function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("golpe.jpeg")) {
        image.src = "executiva (1).jpg";
    }
    else {
        image.src = "golpe.jpeg";
    }
}; 
//Função para redirecionar para a segunda página
//function redirectToSecondPage() {
 // window.location.href = ' ';
//}

// Função para redirecionar para a primeira página
//function redirectToFirstPage() {
 // window.location.href = 'V';
//}

// Função para alternar entre as páginas com um intervalo de tempo
//function startRedirectingLoop() {
  //setInterval(function() {
    // Verifica a página atual e redireciona para a próxima
   // if (window.location.href.includes('Vagas-Disponives.html')) {
    //  redirectToSecondPage();
    //} else {
      //redirectToFirstPage();
   // }
 // }, 5000); // Altere o valor 5000 para o intervalo desejado em milissegundos (5 segundos neste exemplo)
//}

///passar para outra pagina se fazer o pre Formulário de Cadastro


function proximo(){


  window.location.href = 'Vagas-Disponives.html'; // Substitua 'outra_pagina.html' pelo caminho real da página desejada

}