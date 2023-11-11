// String Metodlar

//Length - String bir ifadenin karakter sayısını verir. Programlamada sayma ise 0'dan başlar

let js = "JavaScript"

console.log(js.length); //karakter sayısı 10'dur

//String ifadeler de Karakterlere erişim

console.log(js) // JavaScript

console.log(js[0]) //J

let lastIndex = js.length - 1;

console.log(js[lastIndex]) //t

/*Substr -- Exracts a part of a string - Bir stringde ki bir kısmı cıkartma işlemdir. İki değer alır
    substr(a,b) - a başlangıc index, b - Başlangıç index dahil cıkarılıcak kısım kadar sayıyı temsil eder. 
*/

let country = "Finland"

console.log(country.substr(3,4)) //land

// Substring -- Başlangıc indexden itibaren ve durma index değerlerini alır.Durma indexi dahil olmaz.

console.log(country.substring(3,6)) //lan
console.log(country.substring(0,3)) //Fin
console.log(country.substring(3)) //land


//Split -- Bir string ifadesini belirtilen özelliğe göre böler. ifade almazsa tüm ifade ile bir array oluşturur.

let sample = "JavaScript is perfect language";

console.log(sample.split())  //-- ["Javascript is perfect language"]

console.log(sample.split("")) // -- ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'i', 's', ' ', 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ', 'l', 'a', 'n', 'g', 'u', 'a', 'g', 'e']

console.log(sample.split(" ")) // -- ['JavaScript', 'is', 'perfect', 'language']

//Replace String ifadesinde değşiklik yapmayı sağlar - iki değer alır yeniifade, değişecek ifade


let userName = "Sultan Sultan Aydın";

console.log(userName.replace("Sultan", "Tuğba ")) // -- userName Tuğba Sultan Aydın

let user_Name = "Sultan Sultan Aydın Sultan Sultan Aydın";

console.log(user_Name.replaceAll("Sultan","Tuğba")) // -- Tuğba Tuğba Aydın Tuğba Tuğba Aydın

//CharAt -- Verilen indexin değerini döndürür.

let word = "Kalem";

console.log(word.charAt(0)) // -- K - index değeri 0dan başlar

let last_index = word.length - 1 ;

console.log(word.charAt(last_index)) // -- m - lastIndex değeri karakter sayısı - 1 bizde son index değerini verir uzunluk 5 index ise 4 
                                     // bundan dolayı last_index - 1 yapılır.

                                     
// indexof() -- bu metod belirtilen değerin  index numarasını döndürür.Değer yoksa -1 döndürür

let language = "JavaScript";

console.log(language.indexOf("J")) // -- 0
console.log(language.indexOf("s")) // -- -1 -- kücük s harfi yok kelimedeki büyük küçük harf duyarlılığı vardır.

//lastIndexof() -- bu metod belirtilen en son değerin başangıc index numarasını verir. Yoksa -1 döndürür.

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf("love"))  // --67  l harfinin index numarası 67

console.log(string.lastIndexOf("e")) // --70 en son e harfi ile bitiyor 70

console.log(string.lastIndexOf("l")) // -- 67 en son index l harfi için 67 


//concat() verilen değer ile ifadeyi birleştirir.

let firstName = "Tuğba";

console.log(firstName.concat("aaa")) // -- Tuğbaaaa

console.log(firstName.concat(" Sultan")) // -- Tuğba Sultan


//Search() -- Verilen ifadenin ilk eşleşme index'i verir.

let text = "Mr.Doe has a big house";

console.log(text.search("big")) // -- 13 big ifadesinin ilk eşleşme index b yani b`nin indexi 13 

console.log(text.search("Big")) // -- -1 Big diye bir ifade olmadığı için -1 --case sensetive

//match() --bir alt dize veya normal ifade alır,  / işareti ile başlar ve / işareti ile biter. ifade varsa dizi döndürür yoksa null döndürür.


let sentences = " I love JavaScript. 30 Days of Javascript I LOVE JavaScript";

console.log(sentences.match("love")); // -- ['love', index: 3, input: ' I love JavaScript. 30 Days of Javascript', groups: undefined]

let matchRegex = /love/;
console.log(sentences.match(matchRegex)); // --['love', index: 3, input: ' I love JavaScript. 30 Days of Javascript', groups: undefined]

let reg = /love/g  //--g -> global tüm yani cümlede aramak için anahtardır
console.log(console.log(sentences.match(reg))); // -- ['love']

reg = /love/gi; // g tüm cümlede arar. i harf duyarlılığını görmezden gelir.

console.log(sentences.match(reg)) // -/love/gi aramasına göre ['love', 'LOVE'] 

//Regex kullanımmı ile harfleri bulmak istersek 
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 '

let regExNumber = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regExNumber)) // -- ['2019', index: 3, input: 'In 2019, I ran 30 Days of Python. Now, in 2020', groups: undefined]

regExNumber = /\d+/g

console.log(txt.match(regExNumber)) // -- ['2019', '30', '2020']



