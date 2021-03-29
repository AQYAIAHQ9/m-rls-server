const http = require('http')

const server = http.createServer((req, res) => {
    console.log('URL', req.url)
    res.end('<h1>BOT LIGADO<h1>')
})
server.listen(3001, 'localhost', () => {
    console.log('servidor ligado em: http://localhost:3001')
    console.log('Para desligar: ctrl + c')
})
