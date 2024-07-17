/* 
1. Bir dizi içerisindeki tek sayıları bulmak için filter metodunu kullanın.

Örnek Dizi: [12, 25, 37, 42, 53, 66, 77, 88, 99]*/
const sayilar= [12, 25, 37, 42, 53, 66, 77, 88, 99];

const tekSayi = sayilar.filter(sayi => sayi % 2 ===1);
console.log(tekSayi);


/*2. Bir dizideki her sayıyı yarıya bölmek için map metodunu kullanın.

Örnek Dizi: [4, 8, 12, 16, 20]
*/
const sayilar2 = [4, 8, 12, 16, 209];
const yariSayi = sayilar2.map(sayi => sayi / 2);
console.log(yariSayi);