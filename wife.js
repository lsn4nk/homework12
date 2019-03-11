const husband = require('./husband');

const res = husband.myHusband.getSalary();
const res1 = husband.myHusband.getFriends();
const res2 = husband.myHusband.isSober();

const fs = require('fs');

fs.readFile('husband.js', 'utf8', (err, data) => {
    if (err) throw err;
    const result = '\n' + husband.myHusband.getSalary() + 
    '\n' + husband.myHusband.getFriends() + 
    '\n' + husband.myHusband.isSober();
    console.log(result);
    fs.appendFile('./result.txt', result, (err) => {
        if (err) throw new Error('cannot write')
        console.log('saved');
    });
  });
