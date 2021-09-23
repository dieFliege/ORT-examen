const process = require('process');
const fs = require('fs');

let args = process.argv;
const carpeta = './files/';
const tamKb = 1024;

let matchCount = false;
let matchSize = false;
let i = 2;

while(!matchCount && i < args.length){
    if(args[i] == 'count') matchCount = true;
    i++;
}
i = 2;
while(!matchSize && i < args.length){
    if(args[i] == 'size') matchSize = true;
    i++;
}

if(matchCount){
    fs.readdir(carpeta, function(error, archivos) {  
        let cantArchivos = archivos.length;
        console.log(`Cantidad total de archivos existentes en la carpeta files es: ${cantArchivos}`); 
    });
}

if(matchSize){
    fs.readdir(carpeta, (err, archivos) => {
        archivos.forEach(a => {
            let stats = fs.statSync(carpeta.concat(a));
            fs.appendFile('summary.txt', `${a} ${stats.size} kb\r\n`, function(err){
                if(err) throw err;
            });
        });
      });
}