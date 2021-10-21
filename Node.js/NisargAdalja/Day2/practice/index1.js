/*
7. Create one folder files and move person.txt in that file.*/
//const fs = require('fs');

// directory path
//const dir = './views';

// create new directory
/*fs.mkdir(dir, (err) => {
    if (err) {
        
    }
    console.log("Directory is created.");
});*/

const fs=require('fs');


var oldPath = 'F:/Training-Aug-21/Node.js/NisargAdalja/Day2/practice/person.txt'
var newPath = 'F:/Training-Aug-21/Node.js/NisargAdalja/Day2/practice/views/person.txt'

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})