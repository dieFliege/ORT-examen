const process = require('process');
const fs = require('fs');

let args = process.argv;

let matchCount = false;
let i = 2;

while(!matchCount && i < args.length){
    if(args[i] == 'count') matchCount = true;
    i++;
}

if(matchCount){
    fs.readdir( './files', function(error, archivos) {  
    let cantArchivos = archivos.length;
    console.log(`Cantidad total de archivos existentes en la carpeta files es: ${cantArchivos}`); 
    });
}

