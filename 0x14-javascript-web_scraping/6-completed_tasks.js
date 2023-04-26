#!/usr/bin/node

const request = require('request');
const result = {};

request.get(process.argv[2], (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (res.statusCode === 200) {
    JSON.parse(body).forEach(el => {
      if (el.completed === true) {
        if (result[el.userId] === undefined) {
          result[el.userId] = 0;
        }
        result[el.userId]++;
      }
    });
  }

  console.log(result);
});
