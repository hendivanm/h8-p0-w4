/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf
    setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator
dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    var arrStr = str.split (""); // MEMECAH
    var huruf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hurufVokal = "aiueoAIUEO";
    var indeks;
    var hasil = [];
    
    for (var i = 0; i < arrStr.length; i++) {
      for (var j = 0; j < hurufVokal.length; j++) {
        if (arrStr[i] === hurufVokal[j]) {
          indeks = huruf.indexOf(arrStr[i]) + 1;
          arrStr[i] = huruf[indeks];
        }
      }
      hasil.push (arrStr[i]);
    }
    return hasil;
  }
  
  function reverseWord (str) {
    var reverse = [];
    
    for (var i = str.length - 1; i >= 0; i--) {
      reverse.push(str[i]);
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    var hasil = "";
    
    for (var i = 0; i < str.length; i++) {
      hurufBesar = str[i].toUpperCase();
      hurufKecil = str[i].toLowerCase();
      
      if (str[i] === hurufBesar) {
        hasil += hurufKecil;
      } else if (str[i] === hurufKecil) {
        hasil += hurufBesar;
      } else {
        hasil += str[i];
      }
    }
    return hasil;
  }
  
  function removeSpaces (str) {
    var hasil = str.replace (/\s+/g, ""); // REGEX
    return hasil;
  }
  
  function passwordGenerator (name) {
    var ubahHurufVokal = changeVocals (name);
    var balikKata = reverseWord (ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase (balikKata);
    var hapusSpasi = removeSpaces (balikLowerUpper);
    
    if (name.length < 5) {
      return "Minimal karakter yang diinputkan adalah 5 karakter";
    } else {
      return hapusSpasi;
    }
  }

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'