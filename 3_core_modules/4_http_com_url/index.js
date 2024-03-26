const http = require("http");
const url = require('url');

const port = 3000;

const server = http.createServer((req, res)=>{

    const urlInfo = require('url').parse(req.url,true);
    const name = urlInfo.query.name;
    
    res.statusCode = 200;
    res.setHeader('Contenty-Type','text/html');

    if(!name){
        res.end('<h1>Preencha o Nome:</h1>')
    }else{
        res.end(`<h1>${name}</h1>`);
    }
    
});


server.listen(port, () =>{
    console.log(`Servidor está rodando na porta: ${port}`);
})