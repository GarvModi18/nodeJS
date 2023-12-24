//async process - where multiple users dont have to wait for long task 
//It read simultaneously

const { readFile, writeFile } = require('fs')

console.log("1.start");
readFile('./content/subfolder/first.txt', 'utf8', (err, res) => {
    if(err)
    {
        console.log(err);
        return
    }
        const text1=res;

    readFile('./content/subfolder/second.txt','utf8',(err,res)=>{

        if(err){
            console.log(err);
            return
        }
            const text2=res;

        writeFile('./content/result.txt',
        `hello!! First:${text1}  second:${text2}`,
        (err,res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("2.Done with this task"); 
          
        })
    })
})

  console.log("3.Lets start new task !!"); 
