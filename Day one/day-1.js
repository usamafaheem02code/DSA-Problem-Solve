// first problem  ( reverse a string)

/*  main points of the problem
split: split string ka 1 method ha jo string ko array may change krta based on the separtor
reverse:ya 1 array method ha  jo array ko revere kr data ha mean uskay charater ka ya us kay andar ki cheez ko
join: ya bhi 1 array method ha iska kaam hota hai array ke elements ko jod kar ek single string banana.

yaha pr 1 point ha kay ham pahly bhi to reverse laga kr revers kr skta tay to kio nhi kia ?
reason behind kay reverse jo ha wo array ka method ha aar string pr ya kam nhi krta ha to ham nay pahly string ko array may convert 
kia then ja kr us ko reverse kia ar phr ja kr last par phir usay join kr datay ha join dubar say array ko string bna data ha ar usay
combine kr data ha is trah ham aray ko reverse kr datay ha ar string ko dubar string may lay atay ha 





*/
let str = "usama";

// Step 1: Split (string → array)
let res = str.split("");
console.log(res); // ["u", "s", "a", "m", "a"]

// Step 2: Reverse (array reversed)
let res1 = str.split("").reverse();
console.log(res1); // ["a", "m", "a", "s", "u"]

// Step 3: Join (array → string again)
let res2 = str.split("").reverse().join("");
console.log(res2); // "amasu"

// problem 2 (Palindrome: Reverse karke original se compare karna )

/*

🔹 Problem 2: Check Palindrome
Input: "madam"
Output: true
Input: "hello"
Output: false

🧠 iska marlb hota ha kay jo apnay string di ha usko reverse bhi kro to same woi ani chiay agar ati ha to 
true aya ga ar agar nhi ati to false aya ga
Agar aap string ko reverse karo aur wo original string ke barabar ho, to wo palindrome hai.

*/

let strCom = "madam";
let res3 = strCom.split("").reverse().join("");
if (strCom == res3) {
  console.log(true);
} else {
  console.log(false);
}

// soceond method thorugh function for reuseablity
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("usama"));

// problem 3 (find maximum number form the array)

/*
 Spread operator array ke har element ko alag alag individual arguments bana deta hai.
 Spread Operator ek JavaScript operator hai (...) jo kisi array, string, ya object ke elements ya properties ko expand karta hai — matlab unko alag-alag kar deta hai.
Kya Math.max() directly array mein se max value nahi nikaal sakta?
Kya spread operator array ko normal values bana deta hai taake Math.max() un pe kaam kare?
Math.max() ko individual numbers chahiye hote hain jo spread opetor use kr kay ham log pahly array kay andar 
number ko indiviual bnatay ha then us pr max function apply krty ha 
*/
let num = [1, 3, 5, 6, 2, 6, 4, 9];

let findMaxNum = Math.max(...num);
console.log(findMaxNum);
