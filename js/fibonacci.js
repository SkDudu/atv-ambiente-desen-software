function fibo(num){
      var a;
      var fibo = []; //inicia a array
      document.getElementById("ResFib").innerHTML = fibo[i];

      fibo[0] = 0;
      fibo[1] = 1;
      for(i = 2; i <= 10; i++){
           fibo[i] = fibo[i - 2] + fibo[i - 1];
      }
}