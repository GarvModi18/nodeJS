//Direct exported variable without declaring using const
module.exports.person= "hinaa khan"

//we can use person var using 'this' pointer
//whatever we print here in this module will be automatically be printed in the other module
//like the log statement written here will be directly executed
//at the time we call this cur module using require()
//thats why the next line is commented

//console.log(this.person);



//its array of string or list or collection "NOT SURE :("
const biased = ['male' , 'female']

//we have directly assigned it to gender
//and gender is passed to other modules
//so we can use values of biased var using gender
module.exports.gender = biased;

module.exports.info= {
    std_name : "dhruvi",
    std_rollno:36,
}