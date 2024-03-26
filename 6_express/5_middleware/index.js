const express = require('express');
const path = require('path');
const app = express();
const port=  3000;

const basePath = path.join(__dirname,'templates');

const chechAuth = function(req,res,next){

    req.authStatus = true;

    if(req.authStatus){
        console.log("Está logado!");
        next();
    }else{
        console.log("Não está logado!.");
        next();
    }
};

app.use(chechAuth);

app.get('/',(req,res)=>{

    res.sendFile(basePath+'/index.html');
});

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`);
})

