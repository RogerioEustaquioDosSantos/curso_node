const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname,'../templates');

router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save',(req,res)=>{
    console.log(req.body);
})

router.get('/:id',(req,res)=>{

    const id = req.params.id;

    console.log(`Busca do usuário: ${id}`);

    res.sendFile(basePath+'/index.html');
});

module.exports = router;