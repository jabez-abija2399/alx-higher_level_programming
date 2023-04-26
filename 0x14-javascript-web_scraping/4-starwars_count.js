#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const results = JSON.parse(body).results;

  let count = 0;

  results.forEach(el => {
    el.characters.forEach(char => {
      let id = char.slice(-3, -1).replace('/', '');
      if (parseInt(id) === 18) {
        count++;
      }
    });
  });

  console.log(count);
});
