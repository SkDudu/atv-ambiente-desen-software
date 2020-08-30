function MudarConteudoQuickShort(elq){
      var display = document.getElementById(elq).style.display;
      if(display=="none"){
            document.getElementById(elq).style.display = 'block';
      }else{
            document.getElementById(elq).style.display = 'none';
      }
}