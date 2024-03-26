const express = require('express');
const path = require('path');
const app = express();
const port=  3000;

const basePath = path.join(__dirname,'templates');

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save',(req,res)=>{
    console.log(req.body);
})

app.get('/users/:id',(req,res)=>{

    const id = req.params.id;

    console.log(`Busca do usuário: ${id}`);

    res.sendFile(basePath+'/index.html');
});

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`);
});

