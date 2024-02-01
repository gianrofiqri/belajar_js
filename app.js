let maximum = parseInt(prompt('Masukkan nilai maksimal'));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan pertama kamu'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
    } else {
        guess = parseInt(prompt('Terlalu rendah! tebak lagi:'));
    }
}
alert(`Selamat Tebakan Anda Benar! Dengan Percobaan ${attempts} kali`);