const path = require("path");

console.log(path.resolve('teste.txt'));

const midFolder = "relatorios";

const fileName = "rogerio.txt";

const finalPath = path.join("/",'arquivo',midFolder,fileName);

console.log(finalPath);