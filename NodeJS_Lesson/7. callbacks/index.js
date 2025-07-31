
const fs = require('fs')


function person(name, callbackFn){
    console.log(`Hello ${name}`)
    callbackFn()
}

function address() {
    console.log("Türkiye")
}

person('Murat Şahin',address) // metod içerisine metod gönderebiliriz.

fs.readFile('input.txt','utf-8',(err, data)=>{
    if(err){
        console.log("Error read file ",err)
        return
    }
    console.log(data)
})







