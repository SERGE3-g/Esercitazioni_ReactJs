import fs from'node:fs/promises';

function showClientFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8')
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    }
    );
}

function showClientFile(path) {
    return fs.readFile(path, 'utf-8'
    );
}

showClientFile('ADVANCED-JAVASCRIPT/fs-promise/index.js')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });