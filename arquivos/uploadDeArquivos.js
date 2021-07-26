const fs = require('fs');

fs.readFile('./assets/heitor.jpg', (erro, buffer) => {
  console.log('Imagem foi bufferizada');
  

  fs.writeFile('./assets/heitor2.jpg', buffer, (erro) => {
    console.log('Imagem foi escrita');
  });
});