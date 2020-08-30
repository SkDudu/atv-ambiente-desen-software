function MudarConteudoContagem(ela){
      var display = document.getElementById(ela).style.display;
      if(display=="none"){
            document.getElementById(ela).style.display = 'block';
      }else{
            document.getElementById(ela).style.display = 'none';
      }
}