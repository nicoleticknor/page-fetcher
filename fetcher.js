const request = require('request');
const fs = require('fs')
const input = process.argv.slice(2);
const url = input[0];
const filePath = input[1];

const fetchResource = (url, cb) => {
  request(url, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    cb(body);
  });
}

const callback = (data) => {
  fs.writeFile(filePath, data, { encoding: 'utf8' }, (err) => {
    if (err) throw err;
    console.log('Downloaded and saved ' + data.length + ' bytes to ' + filePath);
  });
}

fetchResource(url, callback);
