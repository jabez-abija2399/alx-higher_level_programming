#!/usr/bin/node

const request = require('request');
const fs = require('fs');

request.get(process.argv[2], (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 200) {
    fs.writeFile(process.argv[3], body, 'utf-8', error => {
      if (error) {
        console.log(error);
      }
    });
  }
});
