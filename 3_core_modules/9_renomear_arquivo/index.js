const fs = require('fs');

fs.rename("arquivo.txt","newarquivo.txt",function(err){
    if(err){
        console.log('Erro!');
        return
    }else{
        console.log('Arquivo removido')
    }
});