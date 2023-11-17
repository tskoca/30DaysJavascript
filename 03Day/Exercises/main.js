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

      
