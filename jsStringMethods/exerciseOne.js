let challange = ' 30 Days Of JavaScript '
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting text. Lorem Ipsum';
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let sonuc;

//url kaç karakterlidir ?
sonuc = challange.length;
//slice(start,end) başlangıç dizini dahil edilirken bitiş dizini dahil edilmez
sonuc = challange.slice(5,11)
/*
  Slice ile substring arasındaki farklar ;-Slice negatif döndürür substring döndürmez
                                          -Slice dizini kopyalar ve yeni bir dizi oluşturur 
                                          -Substring yeni bir dizi oluşturma başlangıç ve bitiş dizinlerini çağırı
        

*/
//dizedeki 5-11 arasındakileri alır
sonuc = challange.substring(5,11)
//Dize içeriğini değiştirir
sonuc = challange.replace('google', 'microsoft')
//replaceAll() dize içerisindeki - büyük ve küçük harflere duyarlı!!!
sonuc = lorem.replaceAll('Lorem','Koray')
//büyük yazdırma
sonuc = lorem.toUpperCase()
//küçük yazdırma
sonuc = lorem.toLowerCase()
//trim() bir dizenin her iki tarafındaki boşlukları kaldırır
sonuc = challange.trim();
//yalnızca dize başındakileri kaldırır
sonuc = challange.trimStart();
//dize sonundakileri kaldırır
sonuc = challange.trimEnd();
//padStart dizeyi baştan doldurur
sonuc = challange.padStart(4,"0");
//padEnd() dizeyi sondan doldurur
sonuc = challange.padEnd(4,"x")
//charAt() belirli dizedeki karakteri döndürür
sonuc = challange.charAt(15)
sonuc = challange.charAt(5)
//split() dizeyi diziye dönüştürür. Yazılan karakterden bölünür
sonuc = challange.split(' ')
sonuc = lorem.split("text")
sonuc = companies.split(',')
//include() true veya false döndürür dizenin içinde arama yapar (büyük küçük harf duyarlı)
sonuc = challange.includes('Script')
sonuc = challange.replace('30 Days Of JavaScript','30 Days Of Python')
//charCodeAt(): String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür. 
sonuc = challange.charCodeAt(12)
//indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür.
let string =  'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
sonuc = string.indexOf('çünkü')
sonuc = challange.indexOf('a')
//LastIndexOf(): Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür
sonuc = challange.lastIndexOf('a')
sonuc = string.lastIndexOf('çünkü')
//startsWith: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.
sonuc = challange.startsWith(' 30')
//endsWith() String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
sonuc = challange.endsWith('JavaScript ')
//match() Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
sonuc = challange.match('a')
//repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
sonuc = challange.repeat(2)
//concat(): Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir
let word = '30 Days Of'
sonuc = word.concat(' JavaScript')


console.log(sonuc)