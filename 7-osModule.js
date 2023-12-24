const os= require('os')

const home=os.homedir
const type=os.type

console.log("plateform" + os.platform);
console.log(home);
console.log(type);