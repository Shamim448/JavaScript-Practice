var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
console.log(arrName);
arrName.push("Shamim");
console.log(arrName);
arrName.unshift("Saba")
//return the element at that index
console.log(arrName.at(5))
console.log(arrName.at(-1)) //Last element of an array
//concat
var a = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var b = ['Shamim', 'Saba'];
var c = a.concat(b);
document.write(c);
console.log(c);


