const fs = require('fs');

fs.unlink('arquivo.txt',function(err){
    if(err){
        console.log('Erro!');
        return
    }else{
        console.log('Arquivo removido')
    }
})