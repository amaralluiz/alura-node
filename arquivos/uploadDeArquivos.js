const fs = require('fs');

fs.createReadStream('./assets/heitor.jpg')
  .pipe(fs.createWriteStream('./assets/heitor-stream.jpg'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso'));