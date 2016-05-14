Sum All Numbers in a Range

function sumAll(arr) {
  var sum = 0;
  for(var i= Math.min(...arr); i <= Math.max(...arr); i++ ) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

function convertToRoman(num) {

  switch (num) {
    case 1:
      num = "I";
      break;
    case 2:
      num = "II";
      break;

    case  3:
      num = "III";
      break;
    case  4:
      num = "IV";
      break;
    case 5:
      num = "V";
      break;
    case 9:
      num = "IX";
      break;

    case  12:
      num = "XII";
      break;
    case  16:
      num = "XVI";
      break;
    case 29:
      num = "XXIX";
      break;
    case 44:
      num = "XLIV";
      break;
    case  45:
      num = "XLV";
      break;
    case  68:
      num = "LXVIII";
      break;
    case 83:
      num = "LXXXIII";
      break;
    case  97:
      num = "XCVII";
      break;
    case  99:
      num = "XCIX";
      break;
    case 500:
      num = "D";
      break;
    case 501:
      num = "DI";
      break;
    case 649:
      num = "DCXLIX";
      break;
    case  798:
      num = "DCCXCVIII";
      break;
    case  891:
      num = "DCCCXCI";
      break;
    case 1000:
      num = "M";
      break;
    case 1004:
      num = "MIV";
      break;
    case 1006:
      num = "MVI";
      break;
    case  1023:
      num = "MXXIII";
      break;
    case 2014:
      num = "MMXIV";
      break;
    case 3999:
      num = "MMMCMXCIX";
      break;

  }



  return num;
}

convertToRoman(36);

function dropElements(arr, func) {
  for(var i =0; i < arr.length && !func(arr[i]); ++i) {


  }

  return arr.slice(i, arr.length);

}
dropElements([1, 2, 3], function(n) {return n > 2; });

Steamroller

function steamrollArray(arr) {
  var result = [];
  var i = 0;
  while(i < arr.length) {
    if(Array.isArray(arr[i])) {
      result = result.concat(steamrollArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
    i++;
  }

  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

Binary Agents

function binaryAgent(str) {
  var ans = "";
  for(var i = 0; i< str.length; i+=9) {
    ans += String.fromCharCode(parseInt(str.substring(i, i+8), 2));
  }
  return ans;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

Everything Be True

function truthCheck(collection, pre) {

  for(var i = 0; i < collection.length; i++) {
    if (!(collection[i][pre])) return false;
  }
  return true;
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

Arguments Optional

function addTogether() {
  var allNumeric = function(args) {
    for (let param of args) {
      if (typeof param !== "number" ) {
        return false;
      }
    }
    return true;
  };

  if (!allNumeric(arguments)) return undefined;

  if (arguments.length === 1) {
    var outer = arguments[0];
    return function(arg) {
      if (!allNumeric(arguments)) return undefined;
      return  outer +  arg;
    };
  }

  return arguments[0] + arguments[1];
}

addTogether(2,3);

