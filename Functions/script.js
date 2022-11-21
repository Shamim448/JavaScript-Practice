function myFunc(name, ageFunc){
var age = 20
ageFunc(age)
console.log('Is it interesting? Yes it is Mr.' + name)
}
function myAge(age){
    console.log('I am passed through argument and my age is: ' + age)
}
myFunc('Shamim', myAge)

//Return function to another function
function welcomeMsg(name){
    console.log('Welcome mr. ' + name)
    return function options(menu){
        console.log('Do you like ' + menu +  ' Mr.' + name )
    }
}
welcomeMsg('Shamim')('Tea')

