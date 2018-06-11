function countProfit (shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                   ];

  let result = [];
  let subResult = {};
  let barang = 0;
  let profit = 0;
  let pembeli = []
  
  if (shoppers == 0) { // Untuk Test Case kosong
     return result;
  } else {
    for (var i = 0; i < listBarang.length; i++) {
      subResult.product = listBarang[i][0];
      var produk = listBarang[i][0];
      var harga = listBarang[i][1]; // 150000
      var jumlah = listBarang[i][2]; // 10

      for (var j = 0; j < shoppers.length; j++) {
        if (shoppers[j].product === produk && jumlah >= shoppers[j].amount) {
          pembeli.push (shoppers[j].name);
          barang = barang + shoppers[j].amount;
          jumlah = jumlah - shoppers[j].amount;
          profit = harga * barang;
        }
      }

      subResult.shoppers = pembeli;
      subResult.leftOver = jumlah;
      subResult.totalProfit = profit;
      result.push (subResult); // Push ke dalam {}
      subResult = {};
      pembeli = [];
      profit = 0;
      barang = 0;
    }
  return result;
  }
}

console.log (countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log (countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log (countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); // []