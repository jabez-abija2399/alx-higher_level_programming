#!/usr/bin/node

const request = require('request');

request.get('http://swapi.co/api/films/' + process.argv[2], (err, req, body) => {
  if (err) console.lo(err);
  console.log(JSON.parse(body).title);
});
