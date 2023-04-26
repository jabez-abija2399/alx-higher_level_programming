#!/usr/bin/node

let request = require('request');
let charact;

request.get('http://swapi.co/api/films/' + process.argv[2], function (error, request, body) {
  if (error) {
    throw error;
  } else if (request.statusCode === 200) {
    for (charact of JSON.parse(body).characters) {
      secondreq(charact);
    }
  }
}
);

let secondreq = function (charact) {
  request.get(charact, function (error, request, body) {
    if (error) {
      console.log(error);
    } else if (request.statusCode === 200) {
      console.log(JSON.parse(body).name);
    }
  });
};
