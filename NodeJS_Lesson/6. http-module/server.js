// http server oluştururken öncelikle http modülüne ihityacımız olacak
const http = require('http');

// req, istemciden (tarayıcı veya başka bir istemci uygulama) gelen HTTP isteği hakkındaki tüm bilgileri içerir.
// res, res, sunucunun istemciye vereceği cevabı temsil eder.

const server = http.createServer((req,res)=>{

    console.log(req, 'req')
    res.writeHead(200, {'Content-Type' : 'text/plain'}) // istek sonucu döndüğümüz cevap. 
    res.end('Hello node js from http module') // sayfada bu yazı yazaktır.

})


//HTTP sunucusunun bağlantıları dinlemeye başlaması
const port = 3000
server.listen(port, ()=>{
    console.log(`Serve is now listening to port ${port}`)
})



