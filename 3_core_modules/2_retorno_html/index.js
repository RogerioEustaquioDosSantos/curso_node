const http = require("http");

const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Contenty-Type','text/html')
    res.end('<h1>Olá</h1>')
});

server.listen(port, () =>{
    console.log(`Servidor está rodando na porta: ${port}`);
})