var data = [1, 2, 3, 4, 5, null];
var a = data.filter(function(x){return x<3});

var s = data.filter(function(x) {return x!==undefined && x !== null})
console.log(a);
console.log(data);
console.log(s);
