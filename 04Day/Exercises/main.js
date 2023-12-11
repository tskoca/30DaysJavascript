//Level 1

//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
//'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    // let userAge = prompt("Yaşınızı Girin: ")

    // if(userAge >= 18){
    //     console.log('Araba kullanacak yaştasın.')
    // }
    // else{
    //     console.log('18 yaşını doldurmayı beklemelisin.')
    // }
//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and 
//log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//   let myAge = 29;
//   let yourAge = prompt('Yaşınızı Girin: ');
  
//   if(yourAge > myAge ){
//      console.log(`Benim Yaşım ${myAge}. Sen benden ${yourAge - myAge} yaş daha büyüksün.`)
//   }
//   else{
//     console.log(`Benim Yaşım ${myAge}. Ben senden ${myAge - yourAge} yaş daha büyüğüm.`)
//   }

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/*
using if else
ternary operator.
  let a = 4
  let b = 3
*/
 
//     let a = 4;
//    let b = 3;
 
//    if(a>b){
//       console.log(`A:${a}   B:${b} den daha büyük.`)
//    }
//    else{
//     console.log(`B:${b}  A:${a} dan daha büyük`)
//    }

//Ternary Operators

//  (a > b) ?  console.log(`A:${a}   B:${b} den daha büyük.`) : console.log(`B:${b}  A:${a} dan daha büyük`);

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    // let number = prompt('Lütfen Bir Sayı Giriniz: ');

    // if(number % 2 == 0){
    //     console.log(`Girilen sayı  ${number}; çift sayıdır.`)
    // }
    // else{
    //     console.log(`Girilen sayı ${number}; tek sayıdır.`)
    // }

//Level 2

/*
 Write a code which can give grades to students according to theirs scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

// let score =parseInt(prompt('Lütfen Puanınızı Giriniz:'));
//    console.log('score',score)
//  if(score >= 90 && score <= 100 ){

//     console.log('Notunuzun Harf Değeri: A')
//  }
//  else if(score >= 70 && score < 89){
//     console.log('Notunuzun Harf Değeri: B')
//  }
//  else if(score >= 60 && score < 69){
//     console.log('Notunuzun Harf Değeri: C')
//  }
//  else if(score >= 50 && score < 59){
//     console.log('Notunuzun Harf Değeri: D')
//  }
//  else if(score >= 0 && score < 49){
//    console.log(score)
//     console.log('Notunuzun Harf Değeri: F')
//  }
//  else{
//     console.log('Geçerli Bir Puan Giriniz.')
//  }


/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

// let moon = prompt('Lütfen Ayı Girin: ').toLowerCase();

// switch (moon) {
//    case 'aralık':
//    case 'ocak':
//    case 'şubat':
//       console.log('Mevsim: Kış..')
//       break;
//    case 'mart':
//    case 'nisan':
//    case 'mayıs':
//       console.log('Mevsim: İlkBahar..')
//       break;
//    case 'haziran':
//    case 'temmuz':
//    case 'ağustos':
//       console.log('Mevsim: Yaz..')
//       break;
//    case 'eylül':
//    case 'ekim':
//    case 'kasım':
//       console.log('Mevsim: Sonbahar..')
//       break;
//    default:
//       console.log('Lütfen Geçerli Bir Ay Giriniz....')
//       break;
// }

/* 
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.
    What is the day today? FrIDAy
    Friday is a working day.
*/

// let day = prompt('Bugün Hangi Gün').toLowerCase();

// switch (day) {
//    case "pazartesi":
//    case "sali":
//    case "çarşamba":
//    case "perşembe":
//    case "cuma":
//       console.log(day.charAt(0).toUpperCase + day.slice(1) + " iş günüdür")
//       break;
//    case "cumartesi":
//    case "pazar":
//       console.log(day.charAt(0).toUpperCase() + day.slice(1) + " hafta sonudur");
//       break;
//    default:
//       console.log('Lütfen Geçerli Bir Gün Giriniz.')
//       break;
// }

//Level 3

// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let numberForDay = prompt('Ayı Girin: ').toLowerCase();

switch (numberForDay) {
      case 'ocak':
      case 'mart':
      case 'mayıs':
      case 'temmuz':
      case 'ağustos':
      case 'ekim':
      case 'aralık':
      console.log(`${numberForDay.charAt(0).toUpperCase() + numberForDay.slice(1)} ayı 31 güne sahiptir.  `)
      break;

      case 'nisan':
      case'haziran':
      case 'eylül':
      case 'kasım':
      console.log(`${numberForDay.charAt(0).toUpperCase() + numberForDay.slice(1)} ayı 30 güne sahiptir.`)
      break;
      case 'şubat':
      console.log(`${numberForDay.charAt(0).toUpperCase() + numberForDay.slice(1)} ayı 28 güne sahiptir.`)
      break;
   default:
      console.log('Lütfen Geçerli Bir Ay Giriniz.');
      break;
}

