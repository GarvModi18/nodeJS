const {readFileSync , writeFileSync }= require('fs')

//sync reads whole code line by line

console.log("1.start");
const text1 =readFileSync('./content/subfolder/first.txt','utf8',)
const text2 =readFileSync('./content/subfolder/second.txt','utf8',)

console.log(text1);
console.log(text2);
writeFileSync('./content/result.txt',`texts = ${text1} ${text2}`,'utf8')
console.log("2.done with this task");
console.log("3.Lets start New task!!");
