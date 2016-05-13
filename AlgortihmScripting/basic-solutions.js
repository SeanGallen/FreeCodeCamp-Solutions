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

Truncate a string

function truncateString(str, num) {
  if (num < 4){
    return str.slice(0, -(str.length-(num))) + "...";

  } else if (str.length > num) {
    return str.slice(0, -(str.length-(num-3))) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

Chunky Monkey

function chunkArrayInGroups(arr, size) {
  result = [];

  for(i = 0; i<arr.length; i = i + size) {
    result.push(arr.slice(i, i+ size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

Slasher Flick

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

Mutations

function mutation(arr) {
  first = arr[0].toLowerCase();
  second = arr[1].toLowerCase().split('');
  for(i = 0; i<second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

Where do I belong

function getIndexToIns(arr, num) {
  arr = arr.sort();
  count = 0;
  for(i = 0; i <arr.length; i++){
    if (arr[i] < num) {
      count ++;
    }
  }

  return count;
}

getIndexToIns([40, 60], 50);

Return Largest Numbers in Array

function largestOfFour(arr) {
  result = [];
  for (i=0; i<arr.length; i++){

    max = Math.max(...arr[i]);
    result.push(max);

  }

  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

Falsy Bouncer

var bouncer =  function(arr) {return arr.filter(val => val);};

Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  var result = "";
  var char_code = 0;

  for(var i=0; i<str.length; i++) {
    if (!str[i].match(/^[A-Z]/)) {
      result += str[i];
    } else {

      char_code = str.charCodeAt(i);
      if ((char_code > 77) && (char_code < 91)) {

        result += String.fromCharCode(char_code - 13);

      } else if (char_code < 78) {

        result += String.fromCharCode(char_code + 13);
      }
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");

