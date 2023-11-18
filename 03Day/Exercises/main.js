/*firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun
 ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın. */

 let firstName="Tuğba Sultan",
     lastName="Aydın",
     country="Türkiye",
     city="Düzce",
     age=29,
     isMarried=true
     year=2023;


  console.log(typeof lastName); //string
  console.log(typeof firstName); //string
  console.log(typeof country); //string
  console.log(typeof city);    //string
  console.log(typeof age);     //Number
  console.log(typeof isMarried); //Boolean
  console.log(typeof year);    //Number

// '10' türünün 10'a eşit olup olmadığını kontrol edin
 
  console.log('10' == 10)  //true
  console.log(typeof'10' === typeof 10) //false

//parseInt('9.8') 10'a eşit olup olmadığını kontrol edin

  console.log(parseInt('9.8')) //9
  console.log(parseInt('9.8') === 10 ) //false 

/*
Boolean değeri, doğru veya yanlıştır.

Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
Yanlış değer sağlayan üç JavaScript ifadesi yazın.
 */


/*
Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

*/

 console.log(!!3); //true
 console.log(!!"Kodlamak Güzel"); //true
 console.log(!!true) //true

 /*
 Falsy values
0,0n,null,undefined,NaN,the boolean false
'', "", ``, empty string
 */

  console.log(!!null)
  console.log(!!NaN)
  console.log(!!0);
  console.log(!!"")


/*console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun.
 Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
  4 > 3  /true
  4 >= 3 /true
  4 < 3  /false
  4 <= 3 /false
  4 == 4 /true
  4 === 4 /true
  4 != 4  /false
  4 !== 4 /false
  4 != '4' /false
  4 == '4' /true
  4 === '4' /false
Python ve dragon uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.
 python.length != dragon.length /false
*/

 console.log(4 > 3) 
 console.log(4 >= 3)
 console.log(4 < 3)
 console.log(4 <= 3)
 console.log(4 == 4)
 console.log(4 === 4)
 console.log(4 != 4)
 console.log(4 !== 4)
 console.log(4 != '4')
 console.log(4 == '4')
 console.log(4 === '4')
 console.log('pyhton'.length != 'dragon'.length)


 /*
  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12 /true
    4 > 3 && 10 > 12 /false
    4 > 3 || 10 < 12 /true
    4 > 3 || 10 > 12 /true
    !(4 > 3)  /false
    !(4 < 3)  /true
    !(false) /true
    !(4 > 3 && 10 < 12) /false
    !(4 > 3 && 10 > 12) /true
    !(4 === '4') /true
    There is no 'on' in both dragon and python /false
 */

 console.log( 4 > 3 && 10 < 12)
 console.log( 4 > 3 && 10 > 12)
 console.log( 4 > 3 || 10 < 12)
 console.log( 4 > 3 || 10 > 12)
 console.log(!(4 > 3))
 console.log(!(4 < 3))
 console.log(!(false))
 console.log(!(4 > 3 && 10 < 12))
 console.log(!(4 > 3 && 10 > 12))
 console.log(!(4 === '4'))
 console.log(!('dragon'.includes('on') && 'phyton'.includes('on')))
 

 /*
 Use the Date object to do the following activities

    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

    let now = new Date();
    
    let nowYear = now.getFullYear();
    console.log(year);
    let month = now.getMonth();
    console.log(month);
    let date = now.getDate();
    console.log(date);
    let today = now.getDay();
    console.log(today);
    let hour = now.getHours();
    console.log(hour);
    let minutes = now.getMinutes();
    console.log(minutes);
    let time = now.getTime();
    console.log(Math.floor(time/1000)) //  1 Ocak 1970'ten şu ana kadar geçen saniye sayısı



    /*
  // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

  // Divide Time with a year
    const d = new Date();
    let years = Math.round(d.getTime() / year);
    */




//Level 2


//Write a script that prompt the user to enter base and height 
//of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

  let base = parseFloat(prompt('Üçgenin Alanını Hesaplamak İçin Lütfen taban değerini giriniz: '));
  let height = parseFloat(prompt('Üçgenin Alanını Hesaplamak İçin Lütfen yükseklik değerini giriniz: '));

  let area = ((base * height ) * 0.5);
  console.log(`Hello ${area}`);


//Write a script that prompt the user to enter side a, side b, and side c of the triangle
//and and calculate the perimeter of triangle (perimeter = a + b + c)

  let sideA = parseFloat(prompt("Üçgenin A kenar değerini girin: "));
  let sideB = parseFloat(prompt("Üçgenin B kenar değerini girin: "));
  let sideC = parseFloat(prompt("Üçgenin C kenar değerini girin: "));

  let perimeter = sideA + sideB + sideC;

  console.log(`Üçgenin Çevresi ${perimeter}`);

//Get length and width using prompt and calculate an area of rectangle 
//(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
 
 //Area of rectangle

 let length = parseFloat(prompt('Dikdörtgenin Uzunluğunu Girin: '));
 let width = parseFloat(prompt('Dikdörtgenin Genişlik Girin: '));

 let areaRectangle = length * width 
 console.log(`Dikdörtgenin Alanı: ${areaRectangle}`)

  let perimeterRectangle = (2 * (length + width));
 console.log(`Dikdörtgenin Çevresi: ${perimeterRectangle}`)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
//circumference of a circle(c = 2 x pi x r) where pi = 3.14.

 const PI = 3.14;
 let radius = parseFloat(prompt('Dairenin YarıÇapını Giriniz: '));
 
 let areaCircle = (PI * radius * radius)
 let circumference = (PI * 2 * radius)
 console.log(`Dairenin Alanı: ${areaCircle} Dairenin Çevresi ${circumference}`)


 
 //Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

 let x_values = [-3,0,1,2,3]
 
 for(let x of x_values){
   let y  = x*x + 6*x + 9
   console.log(`x:${x} , y:${y}`);
 }

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
 
 let userHours = parseFloat(prompt('Saat sayısını Giriniz: '));
 let userRateHour = parseFloat(prompt('Saat başına ücreti Giriniz: '))

 let pay = userHours * userRateHour ;

 console.log(`Haftalık kazancınız: ${pay}`)

//If the length of your name is greater than 7 say, your name is long else say your name is short.

 let userName = prompt('İsminizi Giriniz: ');

 let nameSay = (userName.length > 7) ? 'İsminiz uzun' : 'İsminiz kısa';

 console.log(nameSay)

//Write a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. Assume some one lives just hundred years

 let years = parseFloat(prompt('Kaç Yıl Yaşadığınız Girin: '));
 let seconds = years * 60 * 60 * 24 * 365;

 console.log(`Sen ${years} yıl, ${seconds} saniye yaşadın`);

//Create a human readable time format using the Date time object

/*YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

let nowDate = new Date();

 let yearD = nowDate.getFullYear();
 let months = nowDate.getMonth() +1;
 let days = nowDate.getDate();
 let hours = nowDate.getHours(); 
 let minute = nowDate.getMinutes();

 console.log(`YYYY-MM-DD HH:mm ${yearD} - ${months} - ${days}  ${hours}:${minute}`)
 console.log(`DD-MM-YYYY HH:mm ${days} - ${months} - ${yearD}  ${hours}:${minute}`)
 console.log(`DD/MM/YYYY HH:mm ${days}/${months}/${yearD}  ${hours}:${minute}`)


//Level 3


//Create a human readable time format using the Date time object. 
//The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let formatDate  = new Date();

let  formatYear = formatDate.getFullYear();
let formatMonths = String(formatDate.getMonth() + 1).padStart(2,'0');
let formatDay = String(formatDate.getDate()).padStart(2,'0');
let formatHours = String(formatDate.getHours()).padStart(2,'0');
let formatMinute  = String(formatDate.getMinutes()).padStart(2,'0');

console.log(`YYY-MM-DD HH:mm --- ${formatYear}-${formatMonths}-${formatDay} ${formatHours}:${formatMinute} `)