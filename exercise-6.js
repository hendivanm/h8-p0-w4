/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t,
dan muncul lebih dulu.
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
	kata = kata.split(" ");
	var winnerWord = [];

	for (var value of kata) {
		var manyLetterInWord = {};
		var score = 0;
		for (var letter of value) {
			if (manyLetterInWord[letter]) {
				manyLetterInWord[letter] += 1
			}
			else {
				manyLetterInWord[letter] = 1;
			}
		}
		// console.log(manyLetterInWord);

		for (var letter in manyLetterInWord) {
			// console.log (letter)
			if (manyLetterInWord[letter] > 1) {
				// console.log(manyLetterInWord[letter]);
				score++;
				// console.log(score);
			}
		}

		// console.log(score)

		if (score > 0) {
			if (winnerWord.length === 0) {
				// winnerWord.push(value);
				// winnerWord.push(score);
				winnerWord = [value, score];
			}
			else if (winnerWord[1] < score) {
				winnerWord = [value, score];
			}
		}

	}
	return winnerWord[0]
}

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau