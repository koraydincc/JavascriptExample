// let word = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// // console.log(word)

// let word2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// // console.log(word2)

//'10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.

// let num = '10';

// console.log(typeof num) //string döndürdü

// let numInt = parseInt(num)

// console.log(typeof numInt)

//parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.

// let num = parseFloat('9.8');

// if (num !== 10) {
//    console.log('Eşit değil')
// }
// else{
//     console.log('Eşittir')
// }

//Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin

// let word1 = 'Python'
// let word2 = 'Jargon'

// if ('on' in word1) {
//     console.log('on ifadesi bulundu')
// }
// else
// {
//     console.log('on ifadesi bulunamadı')
// }


// if ('on' in word2) {
//     console.log('on ifadesi bulundu')
// }
// else
// {
//     console.log('on ifadesi bulunamadı')
// }

//Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.

// let word = 'umarım bu kurs jargonla dolu değildir'

// sonuc = word.includes('jargon')

// console.log(sonuc)

//0 ile 100 arasında rastgele bir sayı üretin.

// let rand = Math.floor(Math.random()*100)

// console.log(rand)

//50 ile 100 arasında rastgele bir sayı üretin.

// let sayi = Math.floor(Math.random()*50) + 50

// console.log(sayi)

let sayi = Math.floor(Math.random()*256) //Math.Random 0-1 arasında sayı üretir

// console.log(sayi)

//Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.

// let ary = 'Javascript'

// let rand = Math.floor(Math.random()*8)

// sonuc = ary.charAt(rand)

// console.log(sonuc)

// let word = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'

// let kelime = 'aşk'

// let sayac = word.split(kelime).length //Kelimeyi her bulduğunda böldüğü için  split kullandık ve uzunluğunu bulduk

// console.log(bul)

// let yazi = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır Çünkü'
 
// let bul = 'çünkü'

// sonuc = yazi.match(/çünkü/gi)


// console.log(sonuc.length)

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'