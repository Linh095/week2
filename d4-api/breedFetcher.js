const request = require('request');
const catAPIrequest = request(API, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    return data[0].description;
  } else {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
});

module.exports = catAPIrequest;