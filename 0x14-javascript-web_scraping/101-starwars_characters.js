#!/usr/bin/node

let request = require('request');
let charact;
let promises = [];
request.get('http://swapi.co/api/films/' + process.argv[2], function (error, request, body) {
  if (error) {
    throw error;
  } else if (request.statusCode === 200) {
    for (charact of JSON.parse(body).characters) {
      promises.push(secondreq(charact));
    }
    Promise.all(promises).then(function (names) {
      names.forEach(function (indivName) {
        console.log(indivName);
      });
    });
  }
}
);

let secondreq = function (charact) {
  return new Promise(function (resolve, reject) {
    request.get(charact, function (error, request, body) {
      if (error) {
        reject(error);
      } else if (request.statusCode === 200) {
        resolve(JSON.parse(body).name);
      }
    });
  });
};
