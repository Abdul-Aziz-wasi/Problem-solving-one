//Problem -01

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
let country = "Bangladesh";
console.log(reverseString(country));

//Problem -02

function countVowels(string) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}
let name = "Abdul Aziz";
console.log(countVowels(name));

//Problem -03

function isPalindrome(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return string === reversed;
}

let a = "leveloo";
console.log(isPalindrome(a));

//Problem -04

function findLargestNumber(arr) {
  return Math.max(...arr);
}

let num = [10, 5, 23, 7, 99, 34];

console.log(findLargestNumber(num));

//Problem -05

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

let numbers = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(removeDuplicates(numbers));

// Problem -06

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let number = [10, 5, 23, 7, 99, 34];
console.log(sumArray(number));

//Problem -07

function evenNumber(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}
let even = [8, 3, 5, 8, 2, 6, 16];
console.log(evenNumber(even));

//problem -08

function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeWords("hello world from bangladesh"));

//Problem -09

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));

//Proble -10

function printNumbers() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

printNumbers();
