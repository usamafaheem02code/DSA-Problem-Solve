// something about keyword new ya kia kam krta ha aar kaha pr lgata ha
/*
1) ik new object bnata ha 
2) phir us object ko class ya funciotn kay sath jorta ha 
3) phir us object ko return kr data ha 

new kaha pr lagaty ha ?
Haan — agar constructor ek class ya function hai jiska kaam hota hai naya object banana, to wahan new lagana must hota hai.
Constructor ek function ya class hoti hai jo naye object banane ke liye banayi jaati hai.

*/

// problem 4 (OTP generator)
function passGen() {
  return console.log("OTP : ", Math.floor(Math.random() * 1111111));
}
passGen();

let passGener = Math.floor(1000 + Math.random() * 1111);
console.log("Otp : ", passGener);

// problem 5

// let a='ali'
// console.log(a.includes("a"));

/*


/*
includes: Ye method **string** aur **array** dono par use hota hai.
Yeh check karta hai ke koi **value ya letter** kisi string ya array ke andar **maujood hai ya nahi**.
Agar value milti hai to `true` return karta hai, warna `false`.


for of loop : "Her ek item ko iterable (jaise array ya string) se nikaal kar ek-ek baar code chalao."
*/

let name = "usama";
let vowels = "aeiou";
let count = 0;

for (let char of name) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("total vowels in the value : ", count);

// problem 6 (fizzbuzz)

/*

✅ 📘 Problem 5: FizzBuzz
❓ Question:
Tumhein 1 se le kar 100 tak ke numbers print karne hain:

Agar number 3 se divisible ho → "Fizz" print karo

Agar number 5 se divisible ho → "Buzz" print karo

Agar 3 aur 5 dono se divisible ho → "FizzBuzz" print karo

Baqi sabhi numbers ko as-it-is print karo

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
