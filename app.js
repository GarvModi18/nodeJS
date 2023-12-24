// To install package.json
//npm init -y  (direct)
//npm init (step by step ,yes) 
//npm --V
//npm -i <packagename>(for local dependancy-used only in cur project)
//npm install -g <packagename> (for global dependancy-used in any project )

//npm init -y  (direct)
//npm i lodash 
//npm i bootstrap

//after installing external dependancy
const _ = require("lodash")

const iteam=[1,[2,[3,[4]]]]
console.log(iteam);

const newIteam= _.flattenDeep(iteam)
console.log(newIteam);
console.log("Hii");
console.log("hello");
// nodemon dependancy is used
//package.json has script which runs app.js filewith command- npm start