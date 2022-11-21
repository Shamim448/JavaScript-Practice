// Object declaration

var person = {
  name: "Shamim",
  id: 37,
  addres: "Gazapur",
  
}
document.write(person.id)
console.log(person)
console.log(typeof(person.id))
//add item in existing object
person.zipcode = 1339
console.log(person)
//add function as a item in object
person.message = function(){
    console.log("Hello! world")
}
console.log(person.message())

//Access all item from object
for(item in person){
    document.write(' ' + item + ' ')
    console.log(item)
}
//add array in object and object in array
person.arrObj = ['Zonayed', {name: 'Rafiq', age: 21, job: 'Student'},'Bangladesh']
console.log(person.arrObj[1].name)




