function angkaPrima(angka) {

  var i = 0;
  var hasil = 0;
  while (i <= angka) {
    i = i + 1;
    if (angka % i === 0) {
      hasil = hasil + 1;
    }
  }

  if (hasil === 2) {
    return true;
  } else {
    return false;
  }
  
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false