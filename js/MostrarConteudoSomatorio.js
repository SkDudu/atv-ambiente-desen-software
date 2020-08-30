function MudarConteudoSomatorio(elw){
      var display = document.getElementById(elw).style.display;
      if(display=="none"){
            document.getElementById(elw).style.display = 'block';
      }else{
            document.getElementById(elw).style.display = 'none';
      }
}