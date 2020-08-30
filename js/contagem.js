function contagem(){
      var a = Number(document.getElementById("a").value);
      var b = Number(document.getElementById("b").value);

      var numero = 0;
      numero.innerHTML = contagem;

      if (a >= 0 && b >= 0) {
            var i = Math.min(a, b);
            while (i <= Math.max(a, b)) console.log(i++);
      }
}

/* function contagem(){
      var a = Number(window.prompt("Entre com primeiro numero"));
var b = Number(window.prompt("Entre com segundo numero"));

var numero = 0;

if (a >= 0 && b >= 0) {
            var i = Math.min(a, b);
            while (i <= Math.max(a, b)) console.log(i++);
        }
}
}
*/