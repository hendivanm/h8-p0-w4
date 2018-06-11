function shoppingTime (memberId, money) {
  
  var sisa = money;
  var barang = ["Sepatu Stacattu", "Baju Zoro", "Baju HN", "Sweater Uniklooh", "Casing Handphone"];
  var harga = [1500000, 500000, 250000, 175000, 50000];
  var member = "Mohon maaf, toko X hanya berlaku untuk member saja";
  var peringatan = "Mohon maaf, uang tidak cukup"

  var pelanggan = {
    memberId: memberId,
    money: money,
    listPurchased:[

    ],
    changeMoney: money
  };

  if (memberId === undefined || memberId === "") {
    return member
  } else if (money < 50000) {
    return peringatan
  } else {
      for (var i = 0; i <= barang.length -1; i++) { // Membeli barang yang mahal dulu, dan akan membeli barang lain nya jika masih punya uang
        if (sisa >= harga[i]) {
          pelanggan.listPurchased.push (barang[i])
          sisa = sisa - harga[i]
        }
      }
    pelanggan.changeMoney = sisa
    return pelanggan;
    }
}

console.log (shoppingTime('1820RzKrnWn08', 2475000));
//   //{ memberId: '1820RzKrnWn08',
//   // money: 2475000,
//   // listPurchased:
//   //  [ 'Sepatu Stacattu',
//   //    'Baju Zoro',
//   //    'Baju H&N',
//   //    'Sweater Uniklooh',
//   //    'Casing Handphone' ],
//   // changeMoney: 0 }

console.log (shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }

console.log (shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log (shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log (shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja