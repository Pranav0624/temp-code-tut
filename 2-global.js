// globals- always have access to these variables
//__dirname-path to current directory
//__filename - filename
//requie - function to use modules
//process - info about the env where the program is being executed
//module - info about current module

console.log(__dirname);
console.log(__filename);

setInterval(()=>{
 console.log('Hello world')
},1000)