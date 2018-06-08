/*
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
First Name, Last Name, Gender dan Birth Year.
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi
'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

    Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
    John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

function changeMe(arr) {
    var result = [];
    var obj = {};
    var year = new Date().getFullYear();

    if (arr == 0) {
    } else {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {

                if (j === 0) {
                  obj.firstName = arr[i][j];
                } else if (j === 1) {
                  obj.lastName = arr[i][j];
                } else if (j === 2) {
                  if (arr[i].length === 3) {
                    obj.gender = arr[i][j];
                    obj.age = "Invalid Birth Year";
                  } else {
                    obj.gender = arr[i][j];
                  }
                } else if (j === 3) {
                  if (arr[i][j] > year) {
                    obj.age = "Invalid Birth Year";
                  } else {
                    obj.age = (year - arr[i][j]);
                  }
                }  
            }
                result.push(obj);
                obj = {};
        }
        console.log("1. Christ Evans :" , result[0]);
        console.log("2. Robert Downey :" , result[1]);
    }
}

// TEST CASES    
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
/* OUTPUT
1. Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male',age: 36 }
2. Robert Downey:{ firstName: 'Robert',lastName: 'Downey',gender: 'Male',age: 'Invalid Birth Year' } 
*/    
changeMe([]); // ""