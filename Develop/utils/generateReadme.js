const fs = require('fs');

const writeReadme = fileContent => {

return new Promise((resolve,reject) => {

fs.writeFile("./dist/README.md", fileContent, err => {

 if (err) {
    reject(err);
return;

     }

 resolve({
    ok: true,
 message: 'File created'

            });
        });
    });
};