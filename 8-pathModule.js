//sync method
const path=require('path');
const { abort } = require('process');

console.log(path.sep);
//storing a path in var
const filepath=path.join('./content','subfolder','first.txt')
console.log(filepath);

//using filename
console.log("Only basename/filename");
const base=path.basename(filepath)
console.log(base);

//using absolute path (full address)
const absolute=path.resolve(__dirname,'content','subfolder','first.text')
console.log(absolute);