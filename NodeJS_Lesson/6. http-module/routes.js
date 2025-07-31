const http = require('http')

const server = http.createServer((req, res) => {
    // isteğin özellikletini düzenliyoruz
    const url = req.url;
    if (url === '/') // base url. yani: http://localhost:3000/
    {
        res.writeHeader(200, { 'Content-Type': 'text/plain' })
        res.end('Home page')
    }else if(url === '/projects'){
        res.writeHeader(200, { 'Content-Type': 'text/plain' })
        res.end('Projects page')
    }else{
        res.writeHeader(404, { 'Content-Type': 'text/plain' })
        res.end('This page can not be found!')
    }
})

const port = 3000;
server.listen(port, () => {
    console.log(`Serve is now listening to port ${port}`)
})