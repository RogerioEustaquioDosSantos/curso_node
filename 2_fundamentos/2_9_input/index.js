const readline = require('readline').createInterface({
    input: process.stdin
    ,output: process.stdout
});


readline.question("Qual seu nome: ", (resposta) =>{
    console.log(`Meu nome é: ${resposta}`);
    readline.close();
})