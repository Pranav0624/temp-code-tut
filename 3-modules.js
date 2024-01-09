//Modules
//every file in Node is Module
//Module-Encapsulated Code(only share minimum)
const names=require('./4-names') //as an object
const sayHi=require('./5-utils')
const data=require('./6-alternative')
console.log(data);
console.log(names);

sayHi(names.john)
sayHi(names.peter);