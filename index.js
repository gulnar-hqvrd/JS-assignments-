// A.
// Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
// Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
// Example:
// input => [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ] => 
//   print:
//     5 -> 1 ədəd
//     2 -> 2 ədəd
//     salam -> 2 ədəd
//     necesen -> 1 ədəd
//     56 -> 1 ədəd
//     7 -> 3 ədəd



// var input = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ];
// var say = {};

// for (let  i = 0; i < input.length; i++) {
//     let element = input[i];

//     if (say[element]) {
//         say[element]++;
//     } else {
//         say[element] = 1;
//     }
// }

// console.log(say);




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// B.
// 'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi array menimsedin.
// Algoritma göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər ekrana çap etməlidir.
// Example:
//   [1, 2, 3], [1, 2, 3] => true
//   [1, 2, 3], [3, 2, 1] => true
//   [1, 2], [1, 2, 2] => false
//   ["salam", 2], ["salam", "2"] => false
//   [1, 4, "at"], ["at", 1, 4] => true
//   ["At", 1], [1, "aT"] => false


// var firstArr =  [1, "aT"] ;
// var secondArr = ["At", 1];
// function Equal(firstArr, secondArr) {
//     if (firstArr.length !== secondArr.length) {
//         return false;
//     }

//     // Hər bir elementi qarşılaşdırmaq
//     for (var i = 0; i < firstArr.length; i++) {
//         if (firstArr[i] !== secondArr[i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(Equal(firstArr, secondArr));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// C.
// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.
//   Example:
//     if array = [ -7, -71, 66, 11 ,3 , 8 , 67]  then print "Ən böyük ikinci: 66, Ən kiçik ikinci -7"  
//     if array = [ 1, 6, 0, 5 , 3 , 8 , 16]  then print "Ən böyük ikinci: 8, Ən kiçik ikinci 1"

// let array = [ 1, 6, 0, 5 , 3 , 8 , 16] ;
// let  sortlarge = array.sort(function(a, b) {
//     return b - a;
// });
// console.log("Ən böyük ikinci :" + sortlarge[1]);

// let  sortsmall = array.sort(function(a, b) {
//     return a - b;
// });
// console.log("Ən kiçik ikinci : "+ sortsmall[1]);




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// D.
// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"



// let array = [1, 2, -5, 8, -3, 9 , -7]
// let menfi = 0
// let musbet = 0

// for(a = 0 ; a < array.length ; a++){
//     if(array[a] > 0){
//         musbet = musbet + array[a]
//     }
//     else{
//     menfi = menfi + array[a]}
// }

// console.log( "Musbet toplam : " + musbet);
// console.log("Mənfi toplam : " + menfi);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// E.
// Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
// Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ] and limit = 4  then print [8, 9]
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  and limit = -4  then print [-3, 2, 5]



// let limit = -4
// let array = [-7, -3, 2, -8, 5 , -4 ] 
// let limitarray = [];

// for(a = 0 ; a <array.length ; a++){
//     if(limit < array[a]){
//         limitarray.push(array[a])
//     }
// }
// console.log(limitarray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// F.
// 1. Bir 'result' dəyişkəniniz olacaq ki başlanğəc dəyəri 1 olmalıdır. Bir arrayiniz olacaq ki içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
// 2. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result ekrana yazdırılacaq.
// ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!

//   Example:
//     if array = [2, true, 3, false, 7, true, 4 false] then print 14 (2 * 7)  
//         burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
//     if array = [8, false, 4, false, 11, false, 2 false] then print 1 
//     if array = [8, false, 3, true, 7, false, 1, true, 8, true] then print 24 (3*1*8)
//     if array = [5, false, 2, true, 7, true, 6, true, 9, false] then print 84 (2*7*6) 

// var array = [2, true, 3, false, 7, true, 4 , false];

// var print = 1;

// for (var i = 0; i < array.length; i += 2) {
//     let number = array[i];
//     let  boolean = array[i + 1];
//     if (boolean === true) {
//         print = print * number;
//     }
// }
// console.log(print);



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// G.
// 1. Bir array yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə ekrana yazdırın.
// Example:
// if array = [1, "salam", 1, true, true, false, false, false, 5, "5"] then print "1 salam true false 5"
// if array = [2, "class", 1, true, "class", 16, 17, 18,  "17"] then print "2 class 1 true 16 17 18"



// let array = [2, "class", 1, true, "class", 16, 17, 18,  "17"]; // Replace this array with your values

// let  equal = [];

// for (let i = 0; i < array.length; i++) {
//     if (equal.indexOf(array[i]) === -1) {
//         equal.push(array[i]);
//     }

//     // console.log(equal.indexOf(array[i]));
// }

// console.log(equal);



