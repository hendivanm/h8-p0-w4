function cariModus(arr) {
    var modus = JSON.parse(JSON.stringify(arr)); // memparse string ke JSON, biasanya mengubah nilai yang dihasilkan oleh parsing.
    var result = [];
  
    for(var i = 0; i < arr.length; i++) {
      var angkaModus = arr[0];
         for(var j = 0; j < arr.length; j++) {
           if(j !== 0 && arr[j] === angkaModus) {
              result.push (angkaModus);
           }
         }   
         arr.splice (0, 1); 
         angkaModus = "";
    } 
    
    if (result.length >= modus.length) {
      return -1;
    } else if (result.length >= 1) {
      return result[0];
    } else {
      return -1;
    } 
  }


console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1