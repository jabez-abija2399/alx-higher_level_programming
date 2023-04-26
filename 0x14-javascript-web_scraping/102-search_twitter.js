#!/usr/bin/node

const request = require('request');
const b64 = require('base-64');
const utf8 = require('utf8');

const key = process.argv[2];
const token = process.argv[3];
const searchString = process.argv[4];

new Promise((resolve, reject) => {
  const url = 'https://api.twitter.com/oauth2/token';
  const options = {
    url,
    form: {
      grant_type: utf8.encode('client_credentials')
    },
    headers: {
      Authorization: utf8.encode(`Basic ${b64.encode(`${key}:${token}`)}`)
    },
    json: true
  };

  request.post(options, (err, res, body) => {
    if (err) {
      reject(err);
    } else if (res.statusCode === 200) {
      if (body.token_type === 'bearer') {
        resolve(body.access_token);
      }
    }

    reject(resp.body);
  });
})
.then(() => {
  const url = 'https://api.twitter.com/1.1/search/tweets.json';
  const options = {
    url,
    headers: {
      Authorization: utf8.encode(`'Bearer ${token}`)
    },
    qs: {
      q: searchString,
      count: 5
    },
    json: true
  };

  request.get(options, (err, res, body) => {
    if (err) {
      console.log(err);
    } else if (res.statusCode === 200) {
      body.statuses.forEach(el => {
        console.log(`[${tweet.id}] ${tweet.text} by ${tweet.user.name}`);
      });
    }
  });
},
err => {
  console.log(err);
});
