Reverse a string

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello");

Factorialize a Number

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);

}
factorialize(5);

Check for Palindromes

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[-()_.,\s]/g, '');
  var reverse =  str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  }
  return false;
}
palindrome("0_0 (: /-\ :) 0-0");

Find the Longest Word in a String

function findLongestWord(str) {
  str = str.split(" ");
  str = str.reduce(function(a, b){ return a.length > b.length ? a : b;});
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

Title Case a Sentence

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");

Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  var result = "";

  for (i=0; i < num; i++) {
    result = result + str;

  }
  return result;

}

repeatStringNumTimes("abc", 3);

Confirm the Ending
function confirmEnding(str, target) {

  return (str.substr(-(target.length))) === target;
}

confirmEnding("Bastian", "n");


