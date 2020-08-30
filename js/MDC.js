function mdc() {
      var x = Number(document.getElementById("num4").value);
      var y = Number(document.getElementById("num5").value);
      for(i=1; i<=x && i<=y; i++){
            if(x % i == 0 && y % i == 0){
                  var g=i;
            }
      }console.log(g);
  }


  /*function mdc(num4, num5){
      if(num4 == 0){
            return num5;
      }else{
            var resto = num4 % num5;
            return mdc(num4, resto);
      }
    }
  */

  /* function MDC(a,b){
        if(b == 0){
              return a;
        }else{
              return MDC(b, a%b);
        }
  }
   */