const fs= require('fs');

valor1 = 1;

valor2 = 1;

fs.readFile('arquivo.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return
    }else{
        valor1 = Number(data);
        // console.log('Valor 1',valor1 );
    }
});

fs.readFile('arquivo2.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return
    }else{
        valor2 = Number(data);
        // console.log('Valor 2',valor2 );
    }
});

var valor = valor1 + valor2;
console.log('Valor',valor);