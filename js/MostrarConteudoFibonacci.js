function MudarConteudoFibonacci(elf){
      var display = document.getElementById(elf).style.display;
      if(display=="none"){
            document.getElementById(elf).style.display = 'block';
      }else{
            document.getElementById(elf).style.display = 'none';
      }
}