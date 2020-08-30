function somarValores(){
      var respostaSoma = document.getElementById('respostaSoma');
      var num2 = document.getElementById("num2").value;
      var num3 = document.getElementById('num3').value;
      var soma = parseInt(num2) + parseInt(num3);
      respostaSoma.innerHTML = soma;
}