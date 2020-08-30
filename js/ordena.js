function quickshort(){
      var array = Number(document.getElementById("lista").value);
      array.sort(function (a, b){
            return a-b;
      });
      console.log(array); // prints [0, 1, 2, 2, 3, 3, 7, 7, 8, 29, 34, 782]
}

/*
      var array = [9,6,8,2,7,5];
      array.sort(function (a, b)
      {
            return a-b;
      });
      console.log(array); // prints [2,5,6,7,8,9]
*/