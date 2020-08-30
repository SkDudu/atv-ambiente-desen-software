// números primos
//usando um laço para para contar
//variavel divisor para armazenar os divisores
//se o numero for divisivel pro 2, mostra que é primo

function primo(){
      var numero = parseInt(document.getElementById('num').value);
      var resposta = document.getElementById('resposta');
      var divisores=0;
      for(var count=1 ; count<=numero ; count++){
            if(numero % count == 0){
                  divisores++;
                  console.log(divisores);
            }
            if(divisores==2){
                  resposta.innerHTML='É primo';
            }else{
                  resposta.innerHTML='Não é primo';
            }
      }

    }
