const x = "10";

if(!Number.isInteger(x)){
    throw new Error('A valor de x não é numerico.')
}

console.log("Testando!")