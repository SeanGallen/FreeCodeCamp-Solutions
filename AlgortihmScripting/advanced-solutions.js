Validate US Telephone Numbers

function telephoneCheck(str) {

  var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  var result = reg.test(str);
  return result;
}


telephoneCheck("555-555-5555");

Map the Debris

function orbitalPeriod(arr) {
  return arr.map(function(satellite) {
    return {
      name: satellite.name,
      orbitalPeriod: orbit(satellite.avgAlt)
    };
  });

  function orbit(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = earthRadius + avgAlt;
    var a3 = a * a * a;
    var undersqroot = a3/GM;
    var pi2 = 2 * Math.PI;
    var sqrt = Math.sqrt(undersqroot);
    var orbit = Math.round(pi2 * sqrt);
    return orbit;
  }
}


orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

Pairwise

function first(arr) {
  return arr[0];
}

function rest(arr) {
  return arr.slice(1);
}

function pairwise(arr, arg) {
  if (arr.length === 0) {return 0;}

  var indexelem = arr.map(function(elem, i) {return [i, elem];});

  var sumAll = function(arr) {
    var sums = rest(arr).map(function (elem) {
      return { left: first(arr)[0], right: elem[0], sum: first(arr)[1] + elem[1] };
    });

    return (rest(arr).length === 1) ? sums : sums.concat(sumAll(rest(arr)));
  };
  var arrhash = sumAll(indexelem);
  var new_arrhash = arrhash.filter(function(elm) { return elm.sum === arg;});

  new_arrhash.sort(function(elm, palm){return (elm.left + elm.right)  - (palm.left + palm.right);});

  var rst = new_arrhash.reduce(function(memo, elm){return memo.includes(elm.left) || memo.includes(elm.right) ? memo : memo.concat(elm.left, elm.right);}, []);
  var sum = rst.reduce(function(a, b) { return a + b;});
  return sum;

}

pairwise([1, 1, 1], 2);
