//Exporting function to another module
//name is passed argument in the func 
//we have exported function as an object to another file  

const showName = (name) => {
    console.log(`Hii !! ${name}`)
}

module.exports= showName