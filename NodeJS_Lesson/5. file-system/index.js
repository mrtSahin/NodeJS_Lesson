const fs = require('fs');
const path = require("path")

const dataFolder = path.join(__dirname,"data") // bulunduğumuz dosya dizinine bir de data klasörü ekledik. string olarak tutuyoruz şu an

if(!fs.existsSync(dataFolder)){ // bu dosya mevcutmu diye kontrol ediyor
    fs.mkdirSync(dataFolder) // dosya mevcut değilse böyle bir uzantı oluşturuyor.
    console.log("data folder created", dataFolder)
}

const filePath = path.join(dataFolder, 'example.txt')
//sync way of creating the file
fs.writeFileSync(filePath, "Hello from node js")
console.log("File created successfully");

const readcontentFromFile = fs.readFileSync(filePath, 'utf8') // bir dosyanın içeriğini okuma işlemi
console.log('File content: ',readcontentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line addes to that file")// belirtilen dosya dizinindeki dosya içeriisne yani bir satırda yazı yazma
console.log("New file content added")

// async way of creating the file
const asyncFilePath = path.join(dataFolder, ' async-example.txt')
fs.writeFile(asyncFilePath, 'Hello, Async node js',(err)=>{
    if(err) throw err;
    console.log("Async file is creatd successfully");

    fs.readFile(asyncFilePath, 'utf8',(err, data)=>{
        if(err) throw err;
        console.log("Async file content: ",data);

        fs.appendFile(asyncFilePath, '\nThis is another line added',(err)=>{
            if(err) throw err;
            console.log("New line added to async file");

            fs.readFile(asyncFilePath,"utf-8",(err,updatedFileContent)=>{
                if(err) throw err;
                console.log("Updated file content: ",updatedFileContent)
            })
        })
    })
})



