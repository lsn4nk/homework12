const fs = require('fs');

const wife = require('./wife');

fs.readFile('wife.js', 'utf8', (err, data) => {
    if (err) throw err;
    const result = '\n' + wife.showCount();
    console.log(result);
    fs.appendFile('./result.txt', result, (err) => {
        if (err) throw new Error('cannot write')
        console.log('saved');
    });
  });

