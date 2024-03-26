const fs = require("fs");

console.log("Inicio");


fs.writeFile("arquivo.txt","assincrono",function (err){
    setTimeout(function(){
        console.log("Arquivo foi criado!");
    },2000);
});

console.log('Fim');