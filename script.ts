function ordenarPalavras() {
    let inputElement = document.getElementById("palavras") as HTMLInputElement;
    let palavras = inputElement.value.split(",").map(function(palavra) {
      return palavra.trim();
    });
  
    let listaOrdenada = palavras.sort();
  
    let resultadoElement = document.getElementById("resultado") as HTMLParagraphElement;
    resultadoElement.innerHTML = listaOrdenada.join(", ");
  }
  