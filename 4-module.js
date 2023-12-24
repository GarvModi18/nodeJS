//here we have imported modules by require() func and storing them to variables
//for importing we must write the file name starting with "./"
//because the node also uses built in modules so to navigate our own module
//In future we will use 2/3 upper level of modules(which are locted in other upper directories.)


//funcion
const showName =require('./3-fun')
const names = require("./2-names")

//function calling
showName(names.name1)
showName("susan")
showName(names.name2)

//we have not stored it in variable
//and we have not called the function but it still executes the module
//not like the showName func we manually invoked it
//but this directFun contains a function and func call so when we dont store it in any variable
//it will start executing
//if we store it in var , it will wrap it and only be used when invoked/called

require('./5-directFun')

//used module using alterway
const  variable= require('./6-alterway')

console.log("variable (parent)  =");
console.log(variable);
console.log();
console.log("variable.person = "+variable.person);
console.log("variable.gender ="+variable.gender);
console.log("variable.info.std_rollno ="+variable.info.std_rollno);
